import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: LucideIcon;
  children: React.ReactNode;
}

export function Button({ variant = 'primary', icon: Icon, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-300
        ${variant === 'primary' 
          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/25'
          : 'bg-white/5 hover:bg-white/10 text-white backdrop-blur-lg'}
      `}
    >
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </button>
  );
}