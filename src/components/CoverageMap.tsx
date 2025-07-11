
import React from 'react';
import { Truck, Package, Phone } from 'lucide-react';

const CoverageMap: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Couverture Nationale</h2>
            <p className="text-xl mb-8 opacity-90">
              Livraison rapide & présence nationale / maghrébine
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Truck className="w-6 h-6" />
                <span className="text-lg">Livraison dans tout le Maroc</span>
              </div>
              <div className="flex items-center space-x-3">
                <Package className="w-6 h-6" />
                <span className="text-lg">Stock disponible immédiatement</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span className="text-lg">Support technique local</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
                alt="Carte du Maroc"
                className="w-full h-64 object-cover rounded-lg opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 gap-4">
                  {[1,2,3,4,5,6].map((i) => (
                    <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverageMap;
