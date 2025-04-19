
import { useState, useEffect, useCallback } from 'react';
import { useEasterEgg } from '@/context/EasterEggContext';

export const useEasterEggTrigger = () => {
  const [secretCode, setSecretCode] = useState<string[]>([]);
  const { triggerEasterEgg } = useEasterEgg();

  // Clear the code sequence after a delay
  const resetCodeSequence = useCallback(() => {
    const timer = setTimeout(() => {
      setSecretCode([]);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
      const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
        'KeyB', 'KeyA'
      ];
      
      // Alternative code: P, O, R, T, F, O, L, I, O
      const portfolioCode = [
        'KeyP', 'KeyO', 'KeyR', 'KeyT', 'KeyF', 'KeyO', 'KeyL', 'KeyI', 'KeyO'
      ];

      // Update the tracked key sequence
      setSecretCode(prev => [...prev.slice(-9), event.code]);
      
      // Check if any secret code was entered
      const currentSequence = [...secretCode.slice(-9), event.code].join('');
      
      if (currentSequence === konamiCode.join('') || 
          currentSequence === portfolioCode.join('')) {
        triggerEasterEgg();
        setSecretCode([]); // Reset after triggering
        return;
      }
      
      resetCodeSequence();
    };

    // Listen for special click sequence (3 rapid clicks)
    let clickCount = 0;
    let clickTimer: number | null = null;
    
    const handleTripleClick = () => {
      clickCount++;
      
      if (clickCount === 1) {
        // Start timing for triple-click
        clickTimer = window.setTimeout(() => {
          clickCount = 0;
          clickTimer = null;
        }, 500) as unknown as number;
      }
      
      if (clickCount === 3) {
        triggerEasterEgg();
        clickCount = 0;
        if (clickTimer) {
          clearTimeout(clickTimer);
          clickTimer = null;
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    document.addEventListener('click', handleTripleClick);
    
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      document.removeEventListener('click', handleTripleClick);
      if (clickTimer) clearTimeout(clickTimer);
    };
  }, [secretCode, triggerEasterEgg, resetCodeSequence]);
};
