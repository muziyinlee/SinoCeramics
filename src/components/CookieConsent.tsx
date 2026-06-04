import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieSettings');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieSettings', 'accepted');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 text-slate-300 p-4 z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          <p>
            We use cookies (including third-party cookies from Google) to serve personalized ads and analyze our traffic. 
            By clicking "Accept", you consent to our use of cookies as described in our <a href="/privacy" className="text-blue-400 hover:underline">Privacy Policy</a>.
          </p>
        </div>
        <div className="flex gap-4 shrink-0">
          <button 
            onClick={handleAccept}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded font-medium transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
