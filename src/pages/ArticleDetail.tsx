import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import AdSenseSlot from '../components/AdSenseSlot';
import ImageLightbox from '../components/ImageLightbox';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <Navigate to="/catalog" />;

  return (
    <article className="bg-neutral-950 min-h-screen">
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

        {/* AdSense Top Slot */}
        <div className="mb-16">
          <AdSenseSlot className="min-h-[100px] bg-neutral-900 rounded-xl" slotId="article-top" />
        </div>

        {article.mediaUrl && (
          <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden mb-20 relative px-4">
             <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-transparent to-neutral-950 z-10 pointer-events-none"></div>
             <ImageLightbox 
               src={article.mediaUrl} 
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
            </div>
          ))}
        </div>

        {/* AdSense Bottom Slot */}
        <div className="mt-20">
          <AdSenseSlot className="min-h-[100px] bg-neutral-900 rounded-xl" slotId="article-bottom" />
        </div>
      </div>
    </article>
  );
}
