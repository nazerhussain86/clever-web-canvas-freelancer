
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';

interface EasterEggContextType {
  isEasterEggUnlocked: boolean;
  triggerEasterEgg: () => void;
  resetEasterEgg: () => void;
  unlockCount: number;
}

const EasterEggContext = createContext<EasterEggContextType>({
  isEasterEggUnlocked: false,
  triggerEasterEgg: () => {},
  resetEasterEgg: () => {},
  unlockCount: 0
});

export const EasterEggProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEasterEggUnlocked, setIsEasterEggUnlocked] = useState(false);
  const [unlockCount, setUnlockCount] = useState(0);

  const triggerEasterEgg = () => {
    setIsEasterEggUnlocked(true);
    setUnlockCount(prev => prev + 1);
    
    // Play a subtle sound effect when Easter egg is unlocked
    const audio = new Audio("https://cdn.freesound.org/previews/320/320654_5260872-lq.mp3");
    audio.volume = 0.3;
    audio.play().catch(e => console.log("Audio play failed:", e));
  };

  const resetEasterEgg = () => {
    setIsEasterEggUnlocked(false);
  };

  // Show a different toast message based on how many times they've found the Easter egg
  useEffect(() => {
    if (unlockCount > 0) {
      const messages = [
        "You found the secret!",
        "You found it again! You're good at this!",
        "Wow, three times! You really like secrets!",
        "Four times?! You're a professional Easter egg hunter!"
      ];
      
      const messageIndex = Math.min(unlockCount - 1, messages.length - 1);
      
      toast({
        title: "Easter Egg Discovered!",
        description: messages[messageIndex],
        duration: 3000
      });
    }
  }, [unlockCount]);

  return (
    <EasterEggContext.Provider value={{ 
      isEasterEggUnlocked, 
      triggerEasterEgg, 
      resetEasterEgg,
      unlockCount
    }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export const useEasterEgg = () => useContext(EasterEggContext);
