import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 py-12 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <span className="font-semibold text-slate-200 tracking-wider">OrientKiln</span>
          <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
          <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} OrientKiln. All rights reserved.
          </div>
          <div className="text-xs text-slate-600">
            For academic and educational purposes.
          </div>
        </div>
      </div>
    </footer>
  );
}
