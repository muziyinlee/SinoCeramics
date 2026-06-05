import { useState, useEffect } from 'react';
import { X, ZoomIn } from 'lucide-react';

interface ImageLightboxProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
}

export default function ImageLightbox({ src, alt, className = "", fallbackSrc = "https://images.unsplash.com/photo-1610996841527-beaca1129b19?auto=format&fit=crop&q=80&w=2670" }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  const handleError = () => {
    if (imgSrc !== fallbackSrc) {
      setImgSrc(fallbackSrc);
    }
  };

  // Prevent background scrolling when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div 
        className={`relative group cursor-zoom-in ${className}`} 
        onClick={() => setIsOpen(true)}
      >
        <img 
          src={imgSrc} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700"
          onError={handleError}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
            <ZoomIn className="w-6 h-6" />
          </div>
        </div>
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="relative max-w-7xl max-h-full aspect-auto flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={imgSrc} 
              alt={alt} 
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
              onError={handleError}
            />
          </div>
        </div>
      )}
    </>
  );
}
