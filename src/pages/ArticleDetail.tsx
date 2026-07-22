import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ArrowUp } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import AdSenseSlot from '../components/AdSenseSlot';
import ImageLightbox from '../components/ImageLightbox';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export default function ArticleDetail() {
  const { id } = useParams();
  const currentIndex = ARTICLES.findIndex(a => a.id === id);
  const article = ARTICLES[currentIndex];
  
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!article) return <Navigate to="/catalog" />;

  const prevArticle = currentIndex > 0 ? ARTICLES[currentIndex - 1] : null;
  const nextArticle = currentIndex >= 0 && currentIndex < ARTICLES.length - 1 ? ARTICLES[currentIndex + 1] : null;

  return (
    <article className="bg-neutral-950 min-h-screen relative">
      <Helmet>
        <title>{article.titleEn} | OrientKiln</title>
        <meta name="description" content={article.summaryEn} />
        <meta property="og:title" content={article.titleEn} />
        <meta property="og:description" content={article.summaryEn} />
        {article.mediaBannerUrl && <meta property="og:image" content={"https://orientkiln.com" + article.mediaBannerUrl} />}
      </Helmet>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-4 rounded-full bg-orient-500/10 hover:bg-orient-500/20 text-orient-400 border border-orient-500/20 backdrop-blur-sm transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <Link to="/catalog" className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-neutral-500 hover:text-orient-400 mb-16 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Exhibition
        </Link>
        
        <header className="mb-20 text-center">
          <p className="text-orient-500 font-mono tracking-widest text-sm mb-6">{article.date}</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">
            {article.titleZh}
          </h1>
          <h2 className="text-xl md:text-3xl font-serif text-neutral-400 mb-8 italic font-light">
            {article.titleEn}
          </h2>
        </header>

        {(article.mediaBannerUrl || article.mediaUrl) && (
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-20 relative px-4">
             <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none"></div>
             <ImageLightbox 
               src={article.mediaBannerUrl || article.mediaUrl} 
               alt={article.titleEn} 
               className="w-full h-full shadow-2xl relative z-0"
             />
          </div>
        )}

        <div className="prose prose-invert prose-lg max-w-none">
          {Math.max(article.contentEn.length, article.contentZh.length) > 0 && Array.from({ length: Math.max(article.contentEn.length, article.contentZh.length) }).map((_, idx) => (
            <div key={idx} className="mb-12">
              {article.contentEn[idx] && (
                <p className="mb-4 text-neutral-300 font-serif leading-relaxed font-light text-xl">
                  {article.contentEn[idx]}
                </p>
              )}
              {article.contentZh[idx] && (
                <p className="mb-0 text-white leading-loose text-base font-light">
                  {article.contentZh[idx]}
                </p>
              )}
              {idx === 1 && article.mediaSquareUrl && (
                <div className="mt-16 mb-4 flex justify-center px-4">
                  <div className="w-full max-w-lg aspect-square relative overflow-hidden ring-1 ring-white/10 p-2 bg-neutral-900/50">
                    <ImageLightbox 
                      src={article.mediaSquareUrl} 
                      alt={`${article.titleEn} detail`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {((article.referencesZh && article.referencesZh.length > 0) || (article.referencesEn && article.referencesEn.length > 0)) && (
          <div className="mt-20 pt-10 border-t border-white/10">
            <h3 className="text-orient-500 font-mono tracking-widest text-sm uppercase mb-6">References / 参考文献</h3>
            <ul className="space-y-4">
              {article.referencesEn?.map((ref, idx) => (
                <li key={`en-${idx}`} className="text-neutral-400 font-serif text-sm leading-relaxed">
                  {ref}
                </li>
              ))}
              {article.referencesZh?.map((ref, idx) => (
                <li key={`zh-${idx}`} className="text-neutral-500 text-sm leading-relaxed">
                  {ref}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* AdSense Bottom Slot */}
        <div className="mt-16 text-center">
          <div className="text-neutral-600 text-[10px] tracking-widest font-mono uppercase mb-4">Advertisement</div>
          <AdSenseSlot className="h-[90px] md:h-[120px] bg-neutral-900/40 rounded-xl border border-neutral-800/50" slotId="article-bottom" format="horizontal" />
        </div>

        {/* Article Navigation */}
        <div className="mt-16 pt-8 border-t border-neutral-800/50 flex flex-col md:flex-row justify-between items-stretch gap-4">
          {prevArticle ? (
            <Link to={`/article/${prevArticle.id}`} className="group flex-1 flex flex-col items-start p-6 rounded-xl bg-neutral-900/30 hover:bg-neutral-900/80 transition-colors border border-neutral-800/50 hover:border-neutral-700/80">
              <span className="flex items-center text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2 group-hover:text-orient-400 transition-colors">
                <ChevronLeft className="w-4 h-4 mr-1" />
                上一篇 (Newer)
              </span>
              <span className="text-white font-serif line-clamp-2 md:line-clamp-1">{prevArticle.titleZh}</span>
            </Link>
          ) : (
            <div className="flex-1 hidden md:block"></div>
          )}
          
          {nextArticle ? (
            <Link to={`/article/${nextArticle.id}`} className="group flex-1 flex flex-col items-end p-6 rounded-xl bg-neutral-900/30 hover:bg-neutral-900/80 transition-colors border border-neutral-800/50 hover:border-neutral-700/80 text-right">
              <span className="flex items-center text-xs font-mono tracking-widest text-neutral-500 uppercase mb-2 group-hover:text-orient-400 transition-colors">
                下一篇 (Older)
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
              <span className="text-white font-serif line-clamp-2 md:line-clamp-1">{nextArticle.titleZh}</span>
            </Link>
          ) : (
            <div className="flex-1 hidden md:block"></div>
          )}
        </div>
      </div>
    </article>
  );
}
