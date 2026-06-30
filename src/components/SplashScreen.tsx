import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Dismiss the splash screen after 2 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-neutral-950 flex flex-col items-center justify-center font-sans"
        >
          <div className="text-white text-2xl tracking-[0.25em] font-light mb-8 uppercase">
            Orient<span className="text-orient-500">Kiln</span>
          </div>
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 border border-orient-500/20 border-t-orient-500 rounded-full mb-6"
          />
          <motion.div 
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-orient-500 text-sm tracking-[0.3em] uppercase"
          >
            Loading
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
