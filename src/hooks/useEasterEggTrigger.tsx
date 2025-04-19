
import { useState, useEffect } from 'react';
import { useEasterEgg } from '@/context/EasterEggContext';

export const useEasterEggTrigger = () => {
  const [secretCode, setSecretCode] = useState<string[]>([]);
  const { triggerEasterEgg } = useEasterEgg();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Konami Code: Up, Up, Down, Down, Left, Right, Left, Right, B, A
      const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 
        'KeyB', 'KeyA'
      ];

      setSecretCode(prev => [...prev.slice(-9), event.code]);

      if (secretCode.join('') === konamiCode.join('')) {
        triggerEasterEgg();
        setSecretCode([]); // Reset after triggering
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [secretCode, triggerEasterEgg]);
};
