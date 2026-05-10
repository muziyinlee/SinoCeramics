import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded">
            <span className="text-slate-300 font-serif font-bold text-xl">瓷</span>
          </div>
          <span className="text-lg font-bold text-white tracking-tight">SinoCeramics</span>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="mailto:contact@sinoceramics.example.com" className="hover:text-white transition-colors">Contact Us</a>
        </div>
        <div className="text-sm text-slate-500">
          © {new Date().getFullYear()} SinoCeramics Co., Ltd. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
