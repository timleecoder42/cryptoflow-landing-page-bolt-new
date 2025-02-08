import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';

export function CTA() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-900/90" />
      
      <div 
        ref={ref}
        className={cn(
          "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
          "opacity-0 translate-y-8",
          isInView && "animate-in-up"
        )}
      >
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur-lg opacity-25" />
          <div className="relative bg-gray-900/50 backdrop-blur-xl p-12 rounded-2xl border border-white/10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Start accepting crypto in minutes</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform. Get started with a free trial today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button icon={ArrowRight}>Start Free Trial</Button>
              <Button variant="secondary">Schedule Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}