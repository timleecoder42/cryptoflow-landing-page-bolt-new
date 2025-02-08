import React from 'react';
import { Wallet2 } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-black/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Wallet2 className="h-8 w-8 text-indigo-500" />
            <span className="ml-2 text-xl font-bold text-white">CryptoFlow</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#solutions" className="text-gray-300 hover:text-white transition-colors">Solutions</a>
              <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}