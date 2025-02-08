import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function Card({ icon: Icon, title, description }: CardProps) {
  return (
    <div className="group p-8 bg-white/5 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition-all duration-300" />
        <div className="relative">
          <Icon className="w-12 h-12 text-indigo-400 mb-6" />
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}