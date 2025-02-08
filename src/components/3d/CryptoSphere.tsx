import React from 'react';
import { useParallax } from '../../hooks/useParallax';

export function CryptoSphere() {
  const style = useParallax(0.2);
  
  return (
    <div 
      className="absolute -left-20 top-1/3 w-80 h-80 hidden lg:block"
      style={style}
    >
      <div className="relative w-full h-full animate-spin-slow">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-2xl" />
        <div className="absolute inset-10 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-xl" />
        <div className="absolute inset-20 rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30 blur-lg" />
      </div>
    </div>
  );
}