import { useState, useEffect } from 'react';

export function useParallax(speed: number = 0.5) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      requestAnimationFrame(() => {
        setOffset(scrollPosition);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    transform: `translate3d(0, ${offset * speed}px, 0)`,
  };
}