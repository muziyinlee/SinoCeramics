import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans">
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<div className="max-w-3xl mx-auto py-24 px-6"><h1 className="text-3xl font-serif text-slate-900 mb-8">Terms of Service</h1><p className="text-slate-600 mb-4">Welcome to OrientKiln (orientkiln.com). By accessing our website, you agree to these Terms of Service.</p></div>} />
          <Route path="/privacy" element={<div className="max-w-3xl mx-auto py-24 px-6"><h1 className="text-3xl font-serif text-slate-900 mb-8">Privacy Policy</h1><p className="text-slate-600 mb-4">We are committed to protecting your privacy. This policy outlines how we handle your information on OrientKiln.</p></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}