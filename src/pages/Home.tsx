import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Sparkles, Mail, BookOpen, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../data/articles';

const CATEGORIES = [
  {
    title: '青花瓷 (Blue and White)',
    description: 'Began in the Tang dynasty, reached its peak in the Ming and Qing dynasties. Characterized by white background with blue underglaze.',
    icon: <Globe className="w-6 h-6 text-blue-600" />,
  },
  {
    title: '青瓷 (Celadon)',
    description: 'Originating in the Shang dynasty, famous for its varying shades of jade-like green glazes, representing purity and elegance.',
    icon: <Shield className="w-6 h-6 text-green-700" />,
  },
  {
    title: '粉彩 (Famille Rose)',
    description: 'Introduced during the Qing dynasty, featuring opaque overglaze enamels with complex, colorful floral and scenic designs.',
    icon: <Sparkles className="w-6 h-6 text-pink-600" />,
  }
];

const GALLERY = [
  {
    id: 1,
    title: 'Ming Dynasty Blue & White Vase',
    category: 'Blue and White',
    image: 'https://images.unsplash.com/photo-1610940562867-ea36b85d9ee7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    title: 'Song Dynasty Celadon Bowl',
    category: 'Celadon',
    image: 'https://images.unsplash.com/photo-1600863806460-3538bd187e0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    title: 'Qing Dynasty Tea Set',
    category: 'Famille Rose',
    image: 'https://images.unsplash.com/photo-1590059345229-37fbe40d3a77?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    title: 'Modern Interpretations',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1582236166164-16e6d1a938c1?auto=format&fit=crop&w=800&q=80'
  }
];

const AI_GALLERY = [
  { id: 1, title: 'Jian Silver Hare Detail 1', image: '/images/JianSilverHare1.png' },
  { id: 2, title: 'Jian Silver Hare Detail 2', image: '/images/JianSilverHare2.png' },
  { id: 3, title: 'Jian Silver Hare Detail 3', image: '/images/JianSilverHare3.png' },
  { id: 4, title: 'Tri-Color Tang Galloping Horse', image: '/images/Tri-Color Tang Galloping Horse.png' },
  { id: 5, title: 'Wucai Kid Scene Jar', image: '/images/Wucai_KidSceneJar.png' },
  { id: 6, title: 'Wucai Scene Closeup', image: '/images/Wucai_SceneCloseup.png' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold tracking-wide mb-6 border border-blue-100">
              <span className="w-2 h-2 rounded-full bg-blue-600"></span>
              千年窑火，传世瓷韵
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              The Timeless Edge of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">Chinese Porcelain</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              Discover the profound heritage of Chinese ceramics. From the pure elegance of Song Dynasty celadon to the vibrant mastery of Ming blue and white, explore artworks that have shaped global aesthetics.
            </p>
            <div className="flex items-center gap-4">
              <a href="#collection" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 font-medium flex items-center gap-2 transition-colors">
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link to="/about" className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 px-6 py-3 font-medium transition-colors">
                Our Story
              </Link>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/3] bg-slate-200 overflow-hidden relative">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1578301978693-85fa9c026f19?auto=format&fit=crop&w=1200&q=80" 
                alt="Exquisite porcelain vase" 
                className="object-cover w-full h-full"
              />
            </div>
            {/* Flat decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/10 -z-10" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border border-slate-200 -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Five Millennia of Mastery</h2>
            <p className="text-slate-600">
              Chinese porcelain is categorized by its era, glaze, and firing techniques. These are the three most influential categories that reached global acclaim.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {CATEGORIES.map((cat, i) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 p-8 border border-slate-100 hover:border-blue-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded shadow-sm border border-slate-100 mb-6 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection Section */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Featured Artifacts</h2>
            <p className="text-slate-600 max-w-md">
              A curated selection of representative pieces showcasing different eras and styles of ceramic artistry.
            </p>
          </div>
          <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1 group">
            View full catalog 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GALLERY.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/5] bg-slate-200 overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/10 transition-colors z-10" />
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
                {item.category}
              </div>
              <h4 className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Journal / Articles Section */}
      <section id="journal" className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 text-blue-600 font-semibold tracking-wide text-sm">
                <BookOpen className="w-4 h-4" />
                <span>CERAMIC INSIGHTS</span>
              </div>
              <h2 className="text-3xl font-bold mb-4">Porcelain Journal</h2>
              <p className="text-slate-600 max-w-2xl">
                Bilingual articles exploring the history, techniques, and aesthetic philosophies behind China's most famous ceramics.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {ARTICLES.map((article, i) => (
              <motion.div 
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-slate-200 hover:border-blue-200 transition-all group overflow-hidden flex flex-col shadow-sm hover:shadow-md"
              >
                <Link to={`/article/${article.id}`} className="flex flex-col flex-grow">
                  {/* Media Container */}
                  <div className="aspect-video bg-slate-100 overflow-hidden relative">
                    {article.mediaType === 'video' ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-800/20 group-hover:bg-slate-800/10 transition-colors z-10">
                        <PlayCircle className="w-12 h-12 text-white/80" />
                      </div>
                    ) : null}
                    <img 
                      src={article.mediaUrl} 
                      alt={article.titleEn} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-xs font-bold px-3 py-1 text-slate-900 border border-slate-200/50">
                      {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors font-serif">
                        {article.titleZh}
                      </h3>
                      <h4 className="text-sm font-semibold text-slate-500 mb-3">
                        {article.titleEn}
                      </h4>
                    </div>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                      <p className="text-sm text-slate-700 leading-relaxed">
                        {article.summaryZh}
                      </p>
                      <p className="text-sm text-slate-500 leading-relaxed border-l-2 border-slate-200 pl-3 italic">
                        {article.summaryEn}
                      </p>
                    </div>

                    <span className="text-blue-600 text-sm font-semibold flex items-center gap-1 group-hover:text-blue-700 mt-auto self-start">
                      Read the full story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Concept Art Gallery Section */}
      <section id="ai-concept-art" className="py-24 bg-slate-900 text-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">AI Concept Art Interpretations</h2>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Experience the vivid restoration of ancient aesthetics. The following gallery showcases conceptual artwork generated by modern AI, designed to capture the mood, lighting, and cultural essence of traditional Chinese ceramics. 
            </p>
            <p className="text-xs text-slate-500 border border-slate-700/50 bg-slate-800/50 inline-block px-4 py-2 rounded">
              * 为展现中国古代瓷器的极致美学，本站部分概念展示图由现代前沿 AI 艺术引擎生成，旨在还原历史风貌与艺术魅力。 
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {AI_GALLERY.map((item, i) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative aspect-square overflow-hidden bg-slate-800 rounded-sm"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" 
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-1578301978693-85fa9c026f19?auto=format&fit=crop&w=400&q=80&blur=50`; // Fallback placeholder
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-3 w-full">
                    <p className="text-xs font-medium text-white truncate">{item.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Quality Section (Good for AdSense) */}
      <section className="py-24 bg-white border-b border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12">Why Choose SinoCeramics Journal?</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mx-auto mb-4">
                     <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Authentic Information</h3>
                  <p className="text-slate-600 text-sm">Expert-reviewed articles detailing the true history and craftsmanship of Chinese ceramics.</p>
               </div>
               <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mx-auto mb-4">
                     <Globe className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Bilingual Content</h3>
                  <p className="text-slate-600 text-sm">Bridging cultures with high-quality English and Chinese narratives for a global audience.</p>
               </div>
               <div>
                  <div className="w-12 h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-full mx-auto mb-4">
                     <BookOpen className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Rich Media Experiences</h3>
                  <p className="text-slate-600 text-sm">Detailed photography and upcoming video content to fully appreciate the art of porcelain.</p>
               </div>
            </div>
         </div>
      </section>

      {/* CTA / Contact */}
      <section id="contact" className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-slate-400 mb-10 text-lg max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter to receive the latest articles, historical insights, and updates on Chinese porcelain directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <input type="email" placeholder="Your email address" className="w-full sm:w-auto px-6 py-4 bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-blue-500 rounded-none shadow-sm" />
            <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 font-semibold flex items-center justify-center gap-2 transition-colors">
              <Mail className="w-5 h-5" />
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
