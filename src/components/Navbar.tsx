import { Link } from 'react-router-dom';
import { Compass, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <Compass className="w-6 h-6 text-orient-600 group-hover:rotate-180 transition-transform duration-500" />
          <span className="font-semibold text-lg tracking-tight text-slate-800">OrientKiln</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-orient-600 transition-colors">Home</Link>
          <Link to="/catalog" className="hover:text-orient-600 transition-colors">Catalog</Link>
          <Link to="/about" className="hover:text-orient-600 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-orient-600 transition-colors">Contact</Link>
        </div>
        <button className="md:hidden p-2 text-slate-600">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
