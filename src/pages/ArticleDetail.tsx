import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles';
import { ArrowLeft } from 'lucide-react';

export default function ArticleDetail() {
  const { id } = useParams<{ id: string }>();
  const article = ARTICLES.find(a => a.id === id);

  if (!article) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/" className="text-blue-600 hover:underline">Return to Home</Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 transition-colors mb-8">
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </Link>
      
      <article>
        <header className="mb-10 text-center">
          <div className="text-sm font-semibold text-blue-600 tracking-wider mb-4">
             {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-serif leading-tight">
            {article.titleZh}
          </h1>
          <h2 className="text-2xl text-slate-600 font-medium font-serif italic">
            {article.titleEn}
          </h2>
        </header>

        <div className="mb-12 aspect-[21/9] bg-slate-100 overflow-hidden">
          {article.mediaType === 'image' && (
            <img 
              src={article.mediaUrl} 
              alt={article.titleEn}
              className="w-full h-full object-cover"
            />
          )}
          {article.mediaType === 'video' && (
             <video 
                src={article.mediaUrl} 
                controls 
                className="w-full h-full object-cover"
             />
          )}
        </div>

        <div className="max-w-none grid md:grid-cols-2 gap-12">
          {/* Chinese Content */}
          <div className="space-y-6">
            <h3 className="text-2xl border-b pb-2 border-slate-200 font-serif font-bold text-slate-900">中文阅读</h3>
            {article.contentZh.map((paragraph, idx) => (
              <p key={`zh-${idx}`} className="text-slate-800 leading-loose text-justify">
                {paragraph}
              </p>
            ))}
          </div>
          
          {/* English Content */}
          <div className="space-y-6">
            <h3 className="text-2xl border-b pb-2 border-slate-200 font-serif font-bold text-slate-900 italic">English Translation</h3>
            {article.contentEn.map((paragraph, idx) => (
              <p key={`en-${idx}`} className="text-slate-700 leading-relaxed text-justify font-serif">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>

      {/* Advertisement Space Placeholder */}
      <div className="my-16 p-8 bg-slate-50 border border-slate-200 text-center flex flex-col items-center justify-center min-h-[250px]">
        <span className="text-slate-400 text-sm tracking-widest uppercase mb-2">Advertisement</span>
        <p className="text-slate-500 max-w-sm">
          Google AdSense integration point. Ads will be displayed here once approved.
        </p>
      </div>
    </div>
  );
}
