import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-900 text-slate-200 p-4 md:p-6 z-50 border-t border-slate-800 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm md:text-base leading-relaxed max-w-4xl">
          We use cookies to improve your experience on our site, show personalized ads, and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies as described in our <Link to="/privacy" className="text-orient-400 hover:text-orient-300 underline">Privacy Policy</Link> and <Link to="/terms" className="text-orient-400 hover:text-orient-300 underline">Terms of Service</Link>.
        </div>
        <div className="flex gap-3 shrink-0">
          <button 
            onClick={declineCookies}
            className="px-6 py-2 text-sm font-medium text-slate-300 hover:text-white border border-slate-600 hover:border-slate-400 rounded-lg transition-colors"
          >
            Decline
          </button>
          <button 
            onClick={acceptCookies}
            className="px-6 py-2 text-sm font-medium text-white bg-orient-600 hover:bg-orient-500 rounded-lg transition-colors shadow-sm"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}
