import React from 'react';
import { useParallax } from '../../hooks/useParallax';
import { InteractiveCard } from './InteractiveCard';
import { Wallet2, ArrowRight } from 'lucide-react';

export function FloatingCard() {
  const style = useParallax(-0.1);
  
  return (
    <div 
      className="absolute right-10 top-1/2 -translate-y-1/2 w-80 hidden lg:block"
      style={style}
    >
      <div className="group animate-float">
        <InteractiveCard
          glowColor="from-purple-500/20 to-pink-500/20"
          className="hover:scale-105 transition-all duration-300"
        >
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Wallet2 className="w-8 h-8 text-purple-400" />
              <div className="flex items-center gap-2 text-sm text-purple-300">
                <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full" />
                Live Demo
              </div>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white">Instant Payments</h3>
              <p className="text-sm text-gray-300">Experience lightning-fast crypto transactions with our advanced payment gateway.</p>
            </div>
            
            <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors group">
              Try it now
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </InteractiveCard>
      </div>
    </div>
  );
}