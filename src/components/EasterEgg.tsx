
import React from 'react';
import { useEasterEgg } from '@/context/EasterEggContext';
import { Rocket, Star, Gift } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const EasterEgg: React.FC = () => {
  const { isEasterEggUnlocked, resetEasterEgg } = useEasterEgg();

  if (!isEasterEggUnlocked) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={resetEasterEgg}
      >
        <motion.div 
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex justify-center space-x-4 mb-4">
            <Rocket className="text-yellow-500" size={48} />
            <Star className="text-purple-500" size={48} />
            <Gift className="text-green-500" size={48} />
          </div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            🎉 Easter Egg Unlocked! 🎉
          </h2>
          <p className="text-white/80 mb-6">
            Congratulations! You've discovered a hidden surprise by entering the Konami Code.
          </p>
          <p className="text-sm text-white/60">
            (Click anywhere to close)
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
