
import React, { createContext, useState, useContext, ReactNode } from 'react';

interface EasterEggContextType {
  isEasterEggUnlocked: boolean;
  triggerEasterEgg: () => void;
  resetEasterEgg: () => void;
}

const EasterEggContext = createContext<EasterEggContextType>({
  isEasterEggUnlocked: false,
  triggerEasterEgg: () => {},
  resetEasterEgg: () => {}
});

export const EasterEggProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isEasterEggUnlocked, setIsEasterEggUnlocked] = useState(false);

  const triggerEasterEgg = () => {
    setIsEasterEggUnlocked(true);
  };

  const resetEasterEgg = () => {
    setIsEasterEggUnlocked(false);
  };

  return (
    <EasterEggContext.Provider value={{ 
      isEasterEggUnlocked, 
      triggerEasterEgg, 
      resetEasterEgg 
    }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export const useEasterEgg = () => useContext(EasterEggContext);
