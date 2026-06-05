import { Link } from 'react-router-dom';
import { Compass, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-neutral-950/80 backdrop-blur-md z-50 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className="w-6 h-6 text-orient-500 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-serif font-medium text-lg tracking-wider text-neutral-100 uppercase">OrientKiln</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
          <Link to="/" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Home</Link>
          <Link to="/catalog" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Exhibition</Link>
          <Link to="/about" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">About</Link>
          <Link to="/contact" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Contact</Link>
        </div>
        <button className="md:hidden p-2 text-neutral-400 hover:text-white">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
