import { motion } from 'motion/react';
import { CATALOG_ITEMS } from '../data/catalog';

export default function Catalog() {
  return (
    <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Full Catalog</h1>
      <p className="text-slate-600 mb-12 max-w-2xl">
        Explore our complete, curated collection of Chinese ceramics spanning multiple dynasties and styles.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {CATALOG_ITEMS.map((item, i) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group cursor-pointer bg-white rounded shadow-sm overflow-hidden border border-slate-100 hover:shadow-md transition-all"
          >
            <div className="aspect-square bg-slate-100 overflow-hidden relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/CeladonCrackleTeacup.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                 <span className="text-white text-xs uppercase font-medium tracking-wider">{item.category}</span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2" title={item.title}>
                {item.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
