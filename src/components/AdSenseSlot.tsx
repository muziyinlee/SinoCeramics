import { useEffect } from 'react';

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
  format = 'auto',
  responsive = true,
}: AdSenseSlotProps) {
  useEffect(() => {
    try {
      // @ts-ignore
      const adsbygoogle = window.adsbygoogle || [];
      adsbygoogle.push({});
    } catch (e) {
      console.error('AdSense error:', e);
    }
  }, []);

  return (
    <div className={`adsense-container w-full overflow-hidden flex justify-center items-center ${className}`}>
      <ins
        className="adsbygoogle"
        style={style}
        data-ad-client="ca-pub-8443500829259154"
        data-ad-slot={slotId}
        data-ad-format={format}
        data-full-width-responsive={responsive ? "true" : "false"}
      />
    </div>
  );
}
