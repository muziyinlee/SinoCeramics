import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export default function Catalog() {
  return (
    <div className="bg-slate-50 min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif text-slate-900 mb-6">The Journal</h1>
          <p className="text-lg text-slate-600">
            A curated collection of essays and studies on the history, techniques, and philosophy of Chinese ceramics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map(article => (
            <Link to={`/article/${article.id}`} key={article.id} className="group bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col">
              <div className="w-full aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 mb-6 relative">
                 {article.mediaUrl && (
                   <img 
                     src={article.mediaUrl} 
                     alt={article.titleEn} 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
                     }}
                   />
                 )}
              </div>
              <h3 className="text-xl font-serif text-slate-900 mb-3 group-hover:text-orient-700 transition-colors line-clamp-2">
                {article.titleZh}
              </h3>
              <p className="text-slate-600 text-sm line-clamp-3 mb-6 flex-1">
                {article.summaryZh}
              </p>
              <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between text-sm">
                <span className="text-slate-400 font-mono">{article.date}</span>
                <span className="font-medium text-orient-600 flex items-center gap-1">
                  Read <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
