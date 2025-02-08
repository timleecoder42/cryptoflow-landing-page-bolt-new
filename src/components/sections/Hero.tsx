import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';
import { ParallaxSection } from '../ParallaxSection';
import { FloatingCard } from '../3d/FloatingCard';
import { CryptoGlobe } from "../3d/CryptoGlobe";
import { CryptoSphere } from '../3d/CryptoSphere';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <ParallaxSection speed={0.3} className="h-full">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
        </ParallaxSection>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900" />
      </div>

      <div className="absolute inset-0">
        <div className="relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8">
          <CryptoSphere />
          <FloatingCard />
          <CryptoGlobe />
        </div>
      </div>
      
      <ParallaxSection speed={-0.2} className="relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-white/5 backdrop-blur-lg rounded-full">
            <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2" />
            <span className="text-sm text-gray-300">Now supporting 50+ cryptocurrencies</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="block">Crypto payments</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              for the future
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl">
            Transform your business with seamless crypto payment integration. Fast, secure, and built for the Web3 era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button icon={ArrowRight}>Start Integration</Button>
            <Button variant="secondary" icon={Play}>Watch Demo</Button>
          </div>
        </div>
      </ParallaxSection>
    </section>
  );
}