import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import AdSenseSlot from '../components/AdSenseSlot';

export default function Home() {
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col bg-neutral-950 min-h-screen text-neutral-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 text-white min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
          <span className="text-orient-500 font-medium tracking-[0.3em] text-xs uppercase mb-6 block">
            The Digital Museum
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 text-neutral-100 tracking-tight font-light">
            Ceramic Heritage
          </h1>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            A curated exhibition exploring the profound history, artistry, and aesthetic philosophy embedded within classical Chinese porcelain.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="border border-orient-500/30 text-orient-400 px-8 py-3 rounded-none tracking-widest uppercase text-xs font-medium hover:bg-orient-900/20 transition-all inline-flex items-center gap-3 group"
            >
              Enter Exhibition
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature AdSense Slot */}
      <section className="bg-neutral-950 py-8 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseSlot className="min-h-[100px] bg-neutral-900 rounded-xl border border-neutral-800" slotId="home-top" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-xl">
              <span className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-3 block">
                Featured Highlights
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-4 font-light">Curated Collection</h2>
              <p className="text-neutral-500 font-light leading-relaxed">Discover the defining techniques and distinctive aesthetics of master kilns across dynasties.</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-orient-500 font-medium tracking-widest uppercase text-xs hover:text-orient-400 transition-colors group">
              View Entire Collection <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredArticles.map(article => (
              <Link to={`/article/${article.id}`} key={article.id} className="group flex flex-col items-start">
                <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-8 relative">
                   <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                   {article.mediaUrl && (
                     <img 
                       src={article.mediaUrl} 
                       alt={article.titleEn} 
                       className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal relative z-10"
                       onError={(e) => {
                         (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
                       }}
                     />
                   )}
                   <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent z-20 pointer-events-none"></div>
                </div>
                <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-neutral-500 mb-4 w-full border-b border-neutral-900 pb-3">
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-serif text-neutral-200 mb-4 group-hover:text-orient-400 transition-colors font-light">
                  {article.titleZh}
                </h3>
                <p className="text-neutral-500 font-light line-clamp-3 mb-6 flex-1 leading-relaxed text-sm">
                  {article.summaryZh}
                </p>
                <div className="text-xs uppercase tracking-widest font-medium text-orient-500 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  View artifact <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
