import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { CATALOG_ITEMS } from '../data/catalog';

export default function Catalog() {
  const [selectedItem, setSelectedItem] = useState<typeof CATALOG_ITEMS[0] | null>(null);

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
            onClick={() => setSelectedItem(item)}
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

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-slate-300 transition-colors bg-white/10 hover:bg-white/20 p-2 rounded-full"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="max-w-full max-h-[75vh] object-contain rounded shadow-2xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/images/CeladonCrackleTeacup.png';
                }}
              />
              <div className="mt-4 text-center">
                <h3 className="text-2xl font-semibold text-white">{selectedItem.title}</h3>
                <p className="text-slate-300 mt-1">{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
