
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const AboutContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div>
        <div className="prose prose-lg text-gray-700">
          {t('about-text').split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-6 text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

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
  );
};

export default AboutContent;
