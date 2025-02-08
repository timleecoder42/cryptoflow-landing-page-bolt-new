import React from 'react';
import { useParallax } from '../hooks/useParallax';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  as: Component = 'div',
}: ParallaxSectionProps) {
  const style = useParallax(speed);

  return (
    <Component
      className={`relative will-change-transform ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
}