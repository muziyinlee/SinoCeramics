import { ARTICLES } from '../data/articles';
import ImageLightbox from '../components/ImageLightbox';

export default function Gallery() {
  // Flattening all available images into one array
  const images = [];
  ARTICLES.forEach((article) => {
    if (article.mediaBannerUrl) {
      images.push({ src: article.mediaBannerUrl, alt: article.titleEn, name: article.titleZh });
    }
    if (article.mediaCardUrl) {
      images.push({ src: article.mediaCardUrl, alt: article.titleEn, name: article.titleZh });
    }
    if (article.mediaSquareUrl) {
      images.push({ src: article.mediaSquareUrl, alt: article.titleEn, name: article.titleZh });
    }
    if (article.mediaUrl && !article.mediaBannerUrl && !article.mediaCardUrl && !article.mediaSquareUrl) {
      images.push({ src: article.mediaUrl, alt: article.titleEn, name: article.titleZh });
    }
  });

  return (
    <div className="py-24 bg-neutral-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <span className="text-orient-500 font-medium tracking-[0.3em] text-xs uppercase mb-4 block">
            Artifact Gallery
          </span>
          <h1 className="text-4xl md:text-5xl font-serif text-neutral-100 mb-6 tracking-tight font-light">
            Visual Appreciation
          </h1>
          <h2 className="text-2xl font-serif text-white mb-6 font-light opacity-90 tracking-widest">
            鉴赏图库
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
            A comprehensive visual collection of all ceramic masterpieces, showcasing intricate details, glazes, and historical artistry.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, idx) => (
            <div key={idx} className="break-inside-avoid relative group overflow-hidden bg-neutral-900 border border-white/5 p-2 pb-10">
              <div className="w-full relative">
                <ImageLightbox 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full shadow-lg"
                />
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-serif text-neutral-500 tracking-wider">
                {img.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
