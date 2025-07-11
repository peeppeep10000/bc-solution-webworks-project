
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const AboutHero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('about-title')}
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Solutions de montage & supportage pour professionnels du bâtiment et de l'industrie
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
