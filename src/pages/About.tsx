
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('about-title')}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="prose prose-lg text-gray-700">
                {t('about-text').split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1553135788-896d3eb5b8c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Industrial facility"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Industrial components"
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
    </div>
  );
};

export default About;
