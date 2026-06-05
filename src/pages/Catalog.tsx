import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ARTICLES } from '../data/articles';
import AdSenseSlot from '../components/AdSenseSlot';

export default function Catalog() {
  return (
    <div className="bg-neutral-950 min-h-screen py-24 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Digital Collection
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6">The Exhibition</h1>
          <p className="text-lg text-neutral-400 font-light">
            A curated viewing experience of the most profound history, techniques, and philosophy of Chinese ceramics.
          </p>
        </div>

        {/* AdSense Top Slot */}
        <div className="mb-12">
          <AdSenseSlot className="min-h-[100px] bg-neutral-900 rounded-xl border border-neutral-800" slotId="catalog-top" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map(article => (
            <Link to={`/article/${article.id}`} key={article.id} className="group flex flex-col">
              <div className="w-full aspect-[4/5] overflow-hidden bg-neutral-900 mb-6 relative">
                 {article.mediaUrl && (
                   <img 
                     src={article.mediaUrl} 
                     alt={article.titleEn} 
                     className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-90 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
                     onError={(e) => {
                       (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670';
                     }}
                   />
                 )}
                 <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-neutral-950 to-transparent pointer-events-none"></div>
              </div>
              <h3 className="text-2xl font-serif text-neutral-100 mb-3 group-hover:text-orient-400 transition-colors">
                {article.titleZh}
              </h3>
              <p className="text-neutral-500 text-sm line-clamp-3 mb-6 flex-1 font-light leading-relaxed">
                {article.summaryZh}
              </p>
              <div className="border-t border-neutral-800 pt-4 flex items-center justify-between text-xs uppercase tracking-widest">
                <span className="text-neutral-500">{article.date}</span>
                <span className="text-orient-500 flex items-center gap-2 group-hover:gap-3 transition-all">
                  View <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
