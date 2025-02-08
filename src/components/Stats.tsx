import React from 'react';
import { Users, ArrowUpRight, Shield, Coins } from 'lucide-react';
import { InteractiveCard } from '../3d/InteractiveCard';
import { useInView } from '../../hooks/useInView';
import { useCountUp } from 'react-countup';
import { cn } from '../../utils/cn';

const stats = [
  {
    icon: Users,
    value: 200,
    format: { suffix: 'K+' },
    label: 'Active Users',
    color: 'from-blue-500/20 to-indigo-500/20',
    growth: '+127% YoY',
  },
  {
    icon: ArrowUpRight,
    value: 1000,
    format: { prefix: '$', suffix: 'M+' },
    label: 'Transaction Volume',
    color: 'from-indigo-500/20 to-purple-500/20',
    growth: '+312% YoY',
  },
  {
    icon: Shield,
    value: 99.99,
    format: { suffix: '%' },
    label: 'Uptime',
    color: 'from-purple-500/20 to-pink-500/20',
    growth: 'Enterprise-grade',
  },
  {
    icon: Coins,
    value: 50,
    format: { suffix: '+' },
    label: 'Cryptocurrencies',
    color: 'from-pink-500/20 to-rose-500/20',
    growth: 'Multi-chain',
  },
];

export function Stats() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative min-h-screen flex items-center justify-center py-32 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-gray-900/80 to-gray-900" />

      <div
        ref={ref}
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const { countUp } = useCountUp({
              start: 0,
              end: stat.value,
              duration: 3, // 動畫持續時間
              prefix: stat.format.prefix || '',
              suffix: stat.format.suffix || '',
              enableScrollSpy: true, // 自動啟用滾動動畫
              scrollSpyOnce: true, // 只觸發一次動畫
            });

            return (
              <div
                key={index}
                className={cn(
                  'opacity-0 translate-y-8',
                  isInView && 'animate-in-up'
                )}
                style={{
                  animationDelay: `${index * 400}ms`, // 卡片動畫延遲
                }}
              >
                <InteractiveCard
                  glowColor={stat.color}
                  className="group hover:scale-105 transition-all duration-500"
                >
                  <div className="space-y-4">
                    <stat.icon className="w-8 h-8 text-white opacity-75" />
                    <div>
                      <div className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {countUp}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                    </div>
                    <div className="text-xs text-indigo-400 font-medium">
                      {stat.growth}
                    </div>
                  </div>
                </InteractiveCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
