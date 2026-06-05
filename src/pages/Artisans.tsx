import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { ARTISANS } from '../data/artisans';

export default function Artisans() {
  return (
    <div className="bg-neutral-950 min-h-screen pt-32 pb-24 text-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-20 text-center max-w-3xl mx-auto">
          <Users className="w-8 h-8 text-orient-500 mx-auto mb-6 opacity-80" />
          <span className="text-orient-500 font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Master Artisans
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-6 font-light">
            Keepers of the Kiln
          </h1>
          <h2 className="text-xl md:text-2xl font-serif text-white mb-6 font-light opacity-90 tracking-widest">
            名家匠人传录
          </h2>
          <p className="text-neutral-400 font-light leading-relaxed mb-4">
            Behind every masterpiece is a pair of human hands. Meet the historical masters, scholars, and legendary craftsmen who elevated porcelain from humble clay to immortal art.
          </p>
          <p className="text-neutral-500 font-light leading-relaxed">
            每一件传世之作的背后，都有一双充满温度的双手。在这里，认识那些将瓷器从凡土升华为不朽艺术的历史名匠、学者与传奇匠人。
          </p>
        </header>

        <div className="space-y-32">
          {ARTISANS.map((artisan, index) => (
            <div key={artisan.id} className={`flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="aspect-[4/3] bg-neutral-900 border border-white/5 p-3 relative overflow-hidden group">
                  <img 
                    src={artisan.mediaUrl} 
                    alt={artisan.nameEn} 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-md px-4 py-2 text-xs font-serif tracking-widest border border-white/10 uppercase">
                    {artisan.dynastyEn}
                  </div>
                </div>
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2">
                <div className="text-orient-500 font-medium tracking-[0.2em] text-xs uppercase mb-4 flex items-center gap-3">
                  {artisan.dynastyZh} <div className="h-[1px] w-8 bg-orient-900"></div> {artisan.nameEn}
                </div>
                
                <h3 className="text-3xl font-serif text-neutral-100 mb-2 font-light">
                  {artisan.titleEn}
                </h3>
                <h4 className="text-2xl font-serif text-white mb-8 font-light opacity-90">
                  {artisan.nameZh}：{artisan.titleZh}
                </h4>

                <p className="text-neutral-400 font-light leading-relaxed mb-4 text-lg">
                  {artisan.summaryEn}
                </p>
                <p className="text-neutral-500 font-light leading-relaxed mb-8">
                  {artisan.summaryZh}
                </p>

                <Link 
                  to={`/artisan/${artisan.id}`} 
                  className="inline-flex items-center gap-3 text-orient-500 tracking-widest uppercase text-xs hover:text-orient-400 transition-all group font-medium"
                >
                  Read Full Story <span className="opacity-70 ml-1">阅读传记全文</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
