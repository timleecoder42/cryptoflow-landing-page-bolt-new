import { useEffect, useRef } from 'react';

interface Use3DEffectOptions {
  intensity?: number;
  resetOnLeave?: boolean;
}

export function use3DEffect({ intensity = 30, resetOnLeave = true }: Use3DEffectOptions = {}) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * intensity;
      const rotateY = ((centerX - x) / centerX) * intensity;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = () => {
      if (resetOnLeave) {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      }
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [intensity, resetOnLeave]);

  return cardRef;
}