
import React, { useState } from 'react';
import { useEasterEgg } from '@/context/EasterEggContext';
import { Rocket, Star, Gift, Sparkles, PartyPopper } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from 'react-confetti';
import { useWindowSize } from '@/hooks/useWindowSize';
import { Button } from './ui/button';

export const EasterEgg: React.FC = () => {
  const { isEasterEggUnlocked, resetEasterEgg } = useEasterEgg();
  const [showTreasure, setShowTreasure] = useState(false);
  const { width, height } = useWindowSize();

  if (!isEasterEggUnlocked) return null;

  return (
    <AnimatePresence>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={500}
        gravity={0.2}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={() => !showTreasure && resetEasterEgg()}
      >
        <motion.div 
          className="bg-gradient-to-br from-purple-900/40 to-indigo-900/40 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-md text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.div 
            className="flex justify-center space-x-4 mb-6"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            <Rocket className="text-yellow-500" size={48} />
            <Star className="text-purple-500" size={48} />
            <PartyPopper className="text-green-500" size={48} />
          </motion.div>
          
          <motion.h2 
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >
            🎉 Easter Egg Unlocked! 🎉
          </motion.h2>
          
          <p className="text-white/80 mb-6">
            Congratulations! You've discovered a hidden surprise by entering the Konami Code.
          </p>
          
          {!showTreasure ? (
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setShowTreasure(true)}
                className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white"
              >
                <Sparkles className="mr-2" size={16} /> Reveal Treasure
              </Button>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-white/10 rounded-lg border border-white/20"
            >
              <p className="text-white font-bold mb-2">Secret Message:</p>
              <p className="text-cyan-300 italic">
                "Thanks for exploring my portfolio! Here's a virtual high-five for your curiosity. 👋"
              </p>
              <div className="mt-4">
                <Button 
                  variant="outline"
                  onClick={resetEasterEgg}
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
