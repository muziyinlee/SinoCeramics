import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import SplashScreen from './components/SplashScreen';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Gallery from './pages/Gallery';
import Artisans from './pages/Artisans';
import ArtisanDetail from './pages/ArtisanDetail';
import ArticleDetail from './pages/ArticleDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950 text-neutral-200 font-sans selection:bg-orient-900 selection:text-orient-100">
      <SplashScreen />
      <Navbar />
      <main className="flex-1 pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/artisans" element={<Artisans />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/artisan/:id" element={<ArtisanDetail />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}