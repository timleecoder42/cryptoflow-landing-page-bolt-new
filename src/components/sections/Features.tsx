import React from 'react';
import { Zap, Shield, Globe, Coins, Lock, Users } from 'lucide-react';
import { Card } from '../ui/Card';
import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/cn';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Process transactions in milliseconds with our optimized Layer 2 network.',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security with multi-signature protection and fraud detection.',
  },
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Accept payments from anywhere in the world with automatic currency conversion.',
  },
  {
    icon: Coins,
    title: 'Multi-Chain Support',
    description: 'Support for all major blockchains and Layer 2 scaling solutions.',
  },
  {
    icon: Lock,
    title: 'Compliance Ready',
    description: 'Built-in KYC/AML compliance tools and regulatory reporting.',
  },
  {
    icon: Users,
    title: 'User Management',
    description: 'Comprehensive dashboard for managing users and transactions.',
  },
];

export function Features() {
  const { ref, isInView } = useInView();

  return (
    <section id="features" className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />
      
      <div 
        ref={ref}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className={cn(
          "text-center mb-20 opacity-0 translate-y-8",
          isInView && "animate-in-up"
        )}>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Everything you need to accept crypto payments and scale your business globally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "opacity-0 translate-y-8",
                isInView && "animate-in-up"
              )}
              style={{
                animationDelay: `${(index + 1) * 100}ms`
              }}
            >
              <Card {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}