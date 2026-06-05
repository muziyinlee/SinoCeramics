import { useParams, Link } from 'react-router-dom';
import { ARTISANS } from '../data/artisans';
import { ArrowLeft } from 'lucide-react';

export default function ArtisanDetail() {
  const { id } = useParams();
  const artisan = ARTISANS.find(a => a.id === id);

  if (!artisan) {
    return (
      <div className="bg-neutral-950 min-h-screen flex items-center justify-center text-neutral-400 font-serif">
        Artisan record not found. 匠人档案未找到。
      </div>
    );
  }

  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-24 text-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/artisans" className="inline-flex items-center gap-2 text-orient-500 hover:text-orient-400 transition-colors uppercase tracking-widest text-xs mb-16 font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Artisans 回到名匠堂
        </Link>

        {/* Header */}
        <header className="mb-20 text-center">
          <div className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-6">
            {artisan.dynastyEn} | {artisan.dynastyZh}
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-neutral-100 mb-6 tracking-tight font-light">
            {artisan.nameEn}
          </h1>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6 font-light opacity-90 tracking-widest">
            {artisan.nameZh}
          </h2>
          <h3 className="text-xl md:text-2xl text-neutral-400 font-serif font-light mb-2">
            {artisan.titleEn}
          </h3>
          <h4 className="text-lg text-neutral-500 font-serif font-light">
            {artisan.titleZh}
          </h4>
        </header>

        {/* Main Image */}
        <div className="w-full aspect-[21/9] bg-neutral-900 border border-white/5 p-2 mb-20">
          <img 
            src={artisan.mediaUrl} 
            alt={artisan.nameEn} 
            className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
          />
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mx-auto space-y-16">
          {artisan.contentEn.map((enP, idx) => (
            <div key={idx} className="relative group pl-6 border-l-2 border-orient-900/30 hover:border-orient-500 transition-colors duration-500">
              <p className="text-neutral-300 font-light leading-relaxed mb-6 text-lg">
                {enP}
              </p>
              <p className="text-neutral-500 font-light leading-loose text-base">
                {artisan.contentZh[idx]}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
