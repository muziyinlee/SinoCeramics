import { useEffect, useRef } from 'react';

interface AdSenseSlotProps {
  className?: string;
  style?: React.CSSProperties;
  slotId?: string;
  format?: string;
  responsive?: boolean;
}

export default function AdSenseSlot({
  className = '',
  style = { display: 'block' },
  slotId = 'YOUR_AD_SLOT_ID', // Replace with actual slot ID once generated in your AdSense account
  format = 'horizontal',
  responsive = true,
}: AdSenseSlotProps) {
  const adRef = useRef<HTMLModElement>(null);

  useEffect(() => {
    if (adRef.current && !adRef.current.getAttribute('data-adsbygoogle-status')) {
      try {
        // @ts-ignore
        const adsbygoogle = window.adsbygoogle || [];
        adsbygoogle.push({});
      } catch (e) {
        console.error('AdSense error:', e);
      }
    }
  }, []);

  return (
    <div className={`adsense-container w-full overflow-hidden flex justify-center items-center min-h-[90px] max-h-[150px] ${className}`}>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ ...style, minWidth: '250px' }}
        data-ad-client="ca-pub-8443500829259154"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
