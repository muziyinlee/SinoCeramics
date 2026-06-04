import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export default function Home() {
  const featuredArticles = ARTICLES.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white min-h-[85vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-orient-900/40 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-40 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3)' }}
        ></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32">
          <span className="text-orient-300 font-medium tracking-widest text-sm uppercase mb-4 block">
            Chinese Ceramic Heritage
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 text-white tracking-tight">
            The Shape of Time
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Explore the profound history, artistry, and philosophy embedded within classical Chinese ceramics at OrientKiln.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="bg-white text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-slate-100 transition-colors inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Explore the Journal
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Latest Insights</h2>
              <p className="text-slate-600">Discover the techniques and aesthetics of ancient kilns.</p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-orient-600 font-medium hover:text-orient-700 transition-colors group">
              View all <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArticles.map(article => (
              <Link to={`/article/${article.id}`} key={article.id} className="group flex flex-col items-start">
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 border border-slate-100 shadow-sm relative">
                   <div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
                   {article.mediaUrl && (
                     <img 
                       src={article.mediaUrl} 
                       alt={article.titleEn} 
                       className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 relative z-10"
                       onError={(e) => {
                         (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
                       }}
                     />
                   )}
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="font-mono">{article.date}</span>
                </div>
                <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-orient-700 transition-colors line-clamp-2">
                  {article.titleZh}
                </h3>
                <p className="text-slate-600 line-clamp-3 mb-4 flex-1">
                  {article.summaryZh}
                </p>
                <div className="text-sm font-medium text-orient-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
