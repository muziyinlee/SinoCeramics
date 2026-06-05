import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-900 text-neutral-500 py-12 text-sm mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <span className="font-serif font-medium text-neutral-300 tracking-widest uppercase text-xs">OrientKiln</span>
          <Link to="/about" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">About Us</Link>
          <Link to="/terms" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Contact Us</Link>
        </div>
        <div className="flex flex-col md:items-end gap-2 text-center md:text-right">
          <div className="text-xs uppercase tracking-widest text-neutral-600">
            © {new Date().getFullYear()} OrientKiln. All rights reserved.
          </div>
          <div className="text-[10px] uppercase tracking-widest text-neutral-700">
            For academic and educational purposes.
          </div>
        </div>
      </div>
    </footer>
  );
}
