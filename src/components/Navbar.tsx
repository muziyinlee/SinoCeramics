import { Link, useLocation } from 'react-router-dom';
import { Compass, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Close the menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

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
          <Link to="/artisans" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Artisans</Link>
          <Link to="/gallery" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Gallery</Link>
          <Link to="/about" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">About</Link>
          <Link to="/contact" className="hover:text-orient-400 transition-colors uppercase tracking-widest text-xs">Contact</Link>
        </div>
        <button 
          className="md:hidden p-2 text-neutral-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-neutral-950 border-b border-neutral-900 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            <Link to="/" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">Home</Link>
            <Link to="/catalog" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">Exhibition</Link>
            <Link to="/artisans" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">Artisans</Link>
            <Link to="/gallery" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">Gallery</Link>
            <Link to="/about" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">About</Link>
            <Link to="/contact" className="text-neutral-400 hover:text-orient-400 hover:bg-neutral-900 block px-3 py-4 rounded-none text-xs tracking-widest uppercase transition-colors">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
