import React from 'react';
import { use3DEffect } from '../../hooks/use3DEffect';
import { cn } from '../../utils/cn';

interface InteractiveCardProps {
  className?: string;
  children?: React.ReactNode;
  glowColor?: string;
}

export function InteractiveCard({ 
  className,
  children,
  glowColor = 'from-indigo-500/20 to-purple-500/20'
}: InteractiveCardProps) {
  const cardRef = use3DEffect({ intensity: 15 });

  return (
    <div 
      ref={cardRef}
      className={cn(
        "relative transition-transform duration-200 ease-out transform-gpu will-change-transform",
        className
      )}
    >
      {/* Glow effect */}
      <div className={cn(
        "absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100",
        "transition-opacity duration-300 blur-lg",
        glowColor
      )} />
      
      {/* Card content */}
      <div className="relative bg-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
        {children}
      </div>
    </div>
  );
}