
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
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
            {t('about-subtitle')}
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-200">{t('experience-years')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">{t('satisfied-clients')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10k+</div>
              <div className="text-blue-200">{t('products-delivered')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-blue-200">{t('national-coverage')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
