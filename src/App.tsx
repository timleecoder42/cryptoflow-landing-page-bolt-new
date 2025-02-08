import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/sections/Hero';
import { Features } from './components/sections/Features';
import { Stats } from './components/sections/Stats';
import { CTA } from './components/sections/CTA';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;