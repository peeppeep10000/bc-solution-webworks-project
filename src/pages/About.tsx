
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import AboutContent from '../components/AboutContent';
import CompanyValues from '../components/CompanyValues';

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
          <AboutContent />
        </div>
      </section>

      {/* Values Section */}
      <CompanyValues />
    </div>
  );
};

export default About;
