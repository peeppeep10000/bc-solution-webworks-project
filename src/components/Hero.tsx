
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)'
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-8">BC Solution</h1>
        <p className="text-2xl md:text-3xl mb-8 leading-relaxed max-w-4xl mx-auto">
          Solutions de montage & supportage pour professionnels du bâtiment et de l'industrie
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
            <Link to="/products">Découvrir nos produits</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
            <Link to="/about">Nous contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
