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
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32 mt-20">
          <span className="text-orient-500 font-medium tracking-[0.3em] text-xs uppercase mb-6 block">
            The Digital Museum
            <br/><span className="text-[10px] tracking-widest mt-1 opacity-70">数字博物馆</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-serif mb-4 text-neutral-100 tracking-tight font-light leading-tight">
            Ceramic Heritage
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif mb-10 text-white tracking-widest font-light opacity-90">
            东方瓷器之光
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-4 leading-relaxed font-light">
            A curated exhibition exploring the profound history, artistry, and aesthetic philosophy embedded within classical Chinese porcelain.
          </p>
          <p className="text-base text-neutral-500 max-w-2xl mx-auto mb-16 leading-loose font-light">
            一场精心策划的展览，探索古典中国瓷器内涵的深厚历史、精湛工艺与美学哲学。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/catalog" 
              className="border border-orient-500/30 text-orient-400 px-8 py-3 rounded-none tracking-widest uppercase text-xs font-medium hover:bg-orient-900/20 transition-all inline-flex items-center gap-3 group bg-black/20 backdrop-blur-sm"
            >
              Enter Exhibition
              <span className="opacity-70 ml-1">进入展厅</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Feature AdSense Slot */}
      <section className="bg-neutral-950 py-12 border-y border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdSenseSlot className="min-h-[100px] bg-neutral-900 rounded-xl border border-neutral-800" slotId="home-top" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-orient-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-2xl md:text-3xl font-serif text-neutral-200 mb-6 font-light leading-relaxed">
            "Clay, shaped by human hands and transformed by fire, becomes an eternal testament to civilization."
          </h2>
          <p className="text-neutral-400 text-lg leading-loose font-light mb-12">
            “泥土在人类的双手下成型，在烈火中蜕变，成为文明永恒的见证。”
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-32 relative bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-900 pb-8">
            <div className="max-w-xl">
              <span className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-3 block">
                Featured Highlights
                <span className="ml-2 opacity-70">精选藏品</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-4 font-light">
                Curated Collection
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-6 font-light opacity-90">
                典藏系列
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-2">
                Discover the defining techniques and distinctive aesthetics of master kilns across dynasties.
              </p>
              <p className="text-neutral-500 font-light leading-relaxed">
                探索历代名窑的标志性工艺与独特美学。
              </p>
            </div>
            <Link to="/catalog" className="hidden md:flex items-center gap-2 text-orient-500 font-medium tracking-widest uppercase text-xs hover:text-orient-400 transition-colors group">
              View Entire Collection <span className="opacity-70 ml-1">查看完整系列</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {featuredArticles.map(article => (
              <Link to={`/article/${article.id}`} key={article.id} className="group flex flex-col items-start">
                <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-8 relative">
                   <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                   {(article.mediaCardUrl || article.mediaUrl) && (
                     <img 
                       src={article.mediaCardUrl || article.mediaUrl} 
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
                <h3 className="text-xl font-serif text-neutral-200 mb-2 group-hover:text-orient-400 transition-colors font-light line-clamp-2">
                  {article.titleEn}
                </h3>
                <h4 className="text-lg font-serif text-white mb-6 group-hover:text-orient-400 transition-colors font-light opacity-90">
                  {article.titleZh}
                </h4>
                <p className="text-neutral-400 font-light line-clamp-3 mb-2 flex-1 leading-relaxed text-sm">
                  {article.summaryEn}
                </p>
                <p className="text-neutral-500 font-light line-clamp-3 mb-6 flex-1 leading-loose text-sm">
                  {article.summaryZh}
                </p>
                <div className="text-xs uppercase tracking-widest font-medium text-orient-500 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                  View artifact <span className="opacity-70 ml-1">查看文物</span> <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-8 h-8 text-orient-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-4 font-light">
            Embark on a Journey Through Time
          </h2>
          <h3 className="text-2xl md:text-3xl font-serif text-white mb-8 font-light opacity-90">
            开启一段穿越时空的旅程
          </h3>
          <p className="text-neutral-400 text-lg leading-relaxed font-light mb-4">
            Our comprehensive catalog details the subtle glazes, masterful firing techniques, and profound philosophies forged in dynastic kilns.
          </p>
          <p className="text-neutral-500 text-lg leading-loose font-light mb-12">
            我们详尽的目录记录了历代名窑中孕育的微妙釉色、精湛烧造技艺与深厚哲学思想。
          </p>
          <Link 
            to="/gallery" 
            className="border border-orient-500/30 text-orient-400 px-8 py-4 rounded-none tracking-widest uppercase text-xs font-medium hover:bg-orient-900/40 transition-all inline-flex items-center gap-3 bg-neutral-950"
          >
            Explore Gallery
            <span className="opacity-70 ml-1">探索图库</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
