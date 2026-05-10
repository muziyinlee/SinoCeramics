import { Link } from 'react-router-dom';
import { Code } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 flex items-center justify-center rounded">
            <span className="text-white font-serif font-bold text-xl">瓷</span>
          </div>
          <span className="text-xl font-bold tracking-tight">SinoCeramics</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
          <a href="/#categories" className="hover:text-blue-600 transition-colors">Categories</a>
          <a href="/#journal" className="hover:text-blue-600 transition-colors">Journal</a>
        </div>
        <button className="md:hidden p-2 text-slate-600">
          <Code className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
