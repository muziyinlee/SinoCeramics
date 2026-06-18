import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, BookOpen, PenTool, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { ARTICLES } from '../data/articles';
import { ARTISANS } from '../data/artisans';
import AdSenseSlot from '../components/AdSenseSlot';
import { useState, useEffect } from 'react';

const QUOTES = [
  {
    en: "Clay, shaped by human hands and transformed by fire, becomes an eternal testament to civilization.",
    zh: "泥土在人类的双手下成型，在烈火中蜕变，成为文明永恒的见证。"
  },
  {
    en: "A vessel carved from the earth holds not just water, but the quiet reflection of an entire dynasty.",
    zh: "取自大地的器里盛装的不仅是水，更折射出一个时代宁静的倒影。"
  },
  {
    en: "Through the crackle of glaze and the purity of white, porcelain whispers the secrets of ancient aesthetics.",
    zh: "透过釉面的开片与纯净的白，瓷器低语着古典美学的奥秘。"
  },
  {
    en: "From rough soil to delicate art, the kiln's flames refine the soul of the oriental craftsmanship.",
    zh: "从粗砺泥土到绝美佳器，烈火淬炼出东方工匠的灵魂。"
  },
  {
    en: "Each piece of porcelain is a frozen moment of history, bridging the past and present through art.",
    zh: "每一件瓷器都是凝固的历史，用艺术连接着过去与现在。"
  }
];

export default function Home() {
  const featuredArticles = ARTICLES.slice(0, 3);
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setQuote(QUOTES[randomIndex]);
  }, []);

  return (
    <div className="flex flex-col bg-neutral-950 min-h-screen text-neutral-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-neutral-950 text-white min-h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-800/40 via-neutral-950 to-neutral-950 z-0" />
        <div 
          className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3)' }}
        ></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-32 mt-20"
        >
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
        </motion.div>
      </section>

      {/* Feature AdSense Slot */}
      <section className="bg-neutral-950 py-12 border-y border-neutral-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-neutral-600 text-[10px] tracking-widest font-mono uppercase mb-4">Advertisement</div>
          <AdSenseSlot className="h-[90px] md:h-[120px] bg-neutral-900/40 rounded-xl border border-neutral-800/50" slotId="home-top" format="horizontal" />
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-neutral-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center min-h-[250px]"
        >
          <Sparkles className="w-8 h-8 text-orient-500 mx-auto mb-8 opacity-50" />
          <h2 className="text-2xl md:text-3xl font-serif text-neutral-200 mb-6 font-light leading-relaxed min-h-[80px] flex items-center justify-center transition-opacity duration-1000">
            "{quote.en}"
          </h2>
          <p className="text-neutral-400 text-lg leading-loose font-light mb-12 min-h-[30px] transition-opacity duration-1000">
            “{quote.zh}”
          </p>
        </motion.div>
      </section>

      {/* Curator Insights / Unique Value Section */}
      <section className="py-24 relative bg-neutral-950 border-t border-neutral-900">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="space-y-8">
            <span className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-3 block flex items-center gap-2">
              <PenTool className="w-4 h-4" />
              Curator's Perspective
              <span className="ml-2 opacity-70">主理人手记</span>
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-4 font-light">
              Why We Curate
            </h2>
            <h3 className="text-xl md:text-2xl font-serif text-white mb-6 font-light opacity-90">
              建站独家洞察
            </h3>
            
            <div className="prose prose-invert border-l-2 border-orient-900 pl-6 leading-loose space-y-6">
              <p className="text-neutral-400 font-light text-base">
                "Most history books treat porcelain merely as artifacts—data points of production dates and excavation sites. But through our curation at OrientKiln, we want to share a more personal, aesthetic reading. When I first studied Song dynasty ceramics, I realized that the subtle 'ice-crackle' glazes were not manufacturing flaws, but deliberate expressions of Taoist philosophy—finding perfection in imperfection."
              </p>
              <p className="text-neutral-500 font-light text-base">
                大多数历史书籍仅仅将瓷器视为文物——只是一堆记载着生产日期和出土位置的数据点。但在OrientKiln的策展中，我们希望分享更具个人色彩、更偏重美学的解读点。当我最初研究宋代瓷器时，我意识到那些微妙的“冰裂纹”并非制作工艺上的缺陷，而是道家哲学的刻意表达——在不完美中寻找完美。这是你无法从冰冷的百科全书中读懂的生命力。
              </p>
              <p className="text-neutral-400 font-light text-base">
                "Each article presented here is woven with our unique insights, synthesizing aesthetic theory, historical context, and modern design appreciation to give you a fresh perspective on ancient art. Beyond the objects, we also document the legendary artisans—the <Link to="/artisans" className="text-orient-400 hover:underline">Keepers of the Kiln</Link>—whose devotion transformed mud and fire into eternal civilization."
              </p>
              <p className="text-neutral-500 font-light text-base">
                这里展示的每一篇文章都交织着我们的独家见解，综合了美学理论、历史背景和现代设计鉴赏力，旨在为您提供一个审视古代艺术的全新视角。除了器物本身，我们也为您记录了那些传奇的窑工与名匠——<Link to="/artisans" className="text-orient-400 hover:underline">匠人传录</Link>——正是他们的热血与奉献，将泥土和烈火化为了不朽的文明。
              </p>
            </div>
          </div>
        </motion.div>
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
            {featuredArticles.map((article, index) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex flex-col items-start"
              >
                <Link to={`/article/${article.id}`} className="w-full flex-1 flex flex-col">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-neutral-900 mb-8 relative">
                     <div className="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                     {(article.mediaCardUrl || article.mediaUrl) && (
                       <img 
                         src={article.mediaCardUrl || article.mediaUrl} 
                         alt={article.titleEn} 
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 md:opacity-90 group-hover:opacity-100 mix-blend-normal md:mix-blend-luminosity hover:mix-blend-normal relative z-10"
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
                  <div className="text-xs uppercase tracking-widest font-medium text-orient-500 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4">
                    View artifact <span className="opacity-70 ml-1">查看文物</span> <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Artisans Section */}
      <section className="py-24 bg-neutral-900 border-t border-neutral-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-neutral-800 pb-8">
            <div className="max-w-xl">
              <span className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-3 block flex items-center gap-2">
                <Users className="w-4 h-4" />
                Keepers of the Kiln
                <span className="ml-2 opacity-70">一代匠人</span>
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-100 mb-4 font-light">
                Master Artisans
              </h2>
              <h3 className="text-xl md:text-2xl font-serif text-white mb-6 font-light opacity-90">
                匠人传录
              </h3>
              <p className="text-neutral-400 font-light leading-relaxed mb-2">
                The brilliant minds and devout hands behind the immortal ceramics.
              </p>
              <p className="text-neutral-500 font-light leading-relaxed">
                不朽陶瓷背后那些耀眼的头脑与奉献的双手。
              </p>
            </div>
            <Link to="/artisans" className="hidden md:flex items-center gap-2 text-orient-500 font-medium tracking-widest uppercase text-xs hover:text-orient-400 transition-colors group">
              View All Artisans <span className="opacity-70 ml-1">查看所有工匠</span> <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ARTISANS.slice(0, 4).map((artisan, index) => (
              <motion.div 
                key={artisan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                className="group flex flex-col items-start bg-neutral-950 border border-neutral-900 overflow-hidden hover:border-neutral-800 transition-colors h-full"
              >
                <Link to={`/artisan/${artisan.id}`} className="w-full flex-1 flex flex-col">
                  <div className="w-full aspect-square overflow-hidden bg-neutral-900 relative">
                     {(artisan.mediaUrl) && (
                       <img 
                         src={artisan.mediaUrl} 
                         alt={artisan.nameEn} 
                         className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-100 md:opacity-70 group-hover:opacity-100 mix-blend-normal md:mix-blend-luminosity hover:mix-blend-normal relative z-10"
                         onError={(e) => {
                           (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
                         }}
                       />
                     )}
                     <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent z-20 pointer-events-none opacity-80 group-hover:opacity-50 transition-opacity"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 w-full">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs tracking-widest uppercase text-neutral-500 font-mono">
                        {artisan.dynastyEn}
                      </span>
                    </div>
                    <h3 className="text-2xl font-serif text-neutral-200 mb-1 group-hover:text-orient-400 transition-colors font-light">
                      {artisan.nameEn}
                    </h3>
                    <h4 className="text-xl font-serif text-white mb-4 group-hover:text-orient-400 transition-colors font-light opacity-90">
                      {artisan.nameZh}
                    </h4>
                    <p className="text-neutral-400 font-light line-clamp-2 mb-2 leading-relaxed text-sm">
                      {artisan.summaryEn}
                    </p>
                    <p className="text-neutral-500 font-light line-clamp-2 mb-6 flex-1 leading-loose text-sm">
                      {artisan.summaryZh}
                    </p>
                    <div className="text-xs uppercase tracking-widest font-medium text-orient-500 flex items-center gap-2 group-hover:gap-3 transition-all mt-auto pt-4 border-t border-neutral-900/50">
                      Discover <span className="opacity-70 ml-1">探索</span> <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 bg-neutral-950 border-t border-neutral-900">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
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
        </motion.div>
      </section>
    </div>
  );
}
