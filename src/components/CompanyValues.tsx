
import React from 'react';

const CompanyValues: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">✓</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Fiabilité</h3>
            <p className="text-gray-600">
              Produits sélectionnés pour leur qualité et leur durabilité
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Réactivité</h3>
            <p className="text-gray-600">
              Gestion rapide des approvisionnements et des demandes
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 text-2xl font-bold">🎯</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Expertise</h3>
            <p className="text-gray-600">
              Connaissance approfondie des standards industriels
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
