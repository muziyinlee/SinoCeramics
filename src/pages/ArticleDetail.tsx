import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import AdSenseSlot from '../components/AdSenseSlot';

export default function ArticleDetail() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) return <Navigate to="/catalog" />;

  return (
    <article className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link to="/catalog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-12 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Journal
        </Link>
        
        <header className="mb-16">
          <p className="text-orient-600 font-mono text-sm mb-4">{article.date}</p>
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6 leading-tight">
            {article.titleZh}
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-slate-500 mb-8 italic">
            {article.titleEn}
          </h2>
        </header>

        {/* AdSense Top Slot */}
        <div className="mb-12">
          <AdSenseSlot className="min-h-[100px] bg-slate-50 rounded-xl" slotId="article-top" />
        </div>

        {article.mediaUrl && (
          <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-slate-100 mb-16 shadow-sm border border-slate-100">
            <img 
              src={article.mediaUrl} 
              alt={article.titleEn} 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
              }}
            />
          </div>
        )}

        <div className="prose prose-slate prose-lg max-w-none">
          {/* Chinese Content */}
          <div className="mb-16">
            {article.contentZh.map((paragraph, idx) => (
              <p key={`zh-${idx}`} className="mb-6 text-slate-800 leading-loose text-justify text-[1.05rem]">
                {paragraph}
              </p>
            ))}
          </div>

          <hr className="my-12 border-slate-200" />

          {/* English Content */}
          <div className="text-slate-600 font-serif">
            {article.contentEn.map((paragraph, idx) => (
              <p key={`en-${idx}`} className="mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* AdSense Bottom Slot */}
        <div className="mt-16">
          <AdSenseSlot className="min-h-[100px] bg-slate-50 rounded-xl" slotId="article-bottom" />
        </div>
      </div>
    </article>
  );
}
