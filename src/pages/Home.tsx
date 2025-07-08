
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const categories = [
    {
      title: t('cable-tray'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Cable tray systems'
    },
    {
      title: t('consumable'),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Industrial consumables'
    },
    {
      title: t('fixing-system'),
      image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Fixing systems and hardware'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">BC Solution</h1>
          <p className="text-xl md:text-2xl opacity-90">
            Solutions industrielles professionnelles
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform group-hover:scale-105">
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                      {category.title}
                    </h3>
                  </div>
                  <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.alt}
                      className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="h-2 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Votre partenaire industriel de confiance
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Découvrez notre gamme complète de solutions techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Nos Produits
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Nous Contacter
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
