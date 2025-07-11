
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Votre partenaire industriel de confiance
        </h2>
        <p className="text-xl opacity-90 mb-8">
          Découvrez notre gamme complète de solutions techniques
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
            <Link to="/products">Nos Produits</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
            <Link to="/about">Nous Contacter</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
