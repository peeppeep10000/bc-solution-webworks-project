
import React from 'react';
import { Star, Shield, Zap, Award } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const TeamValues: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Star,
      title: t('excellence'),
      description: t('excellence-desc')
    },
    {
      icon: Shield,
      title: t('reliability'),
      description: t('reliability-desc')
    },
    {
      icon: Zap,
      title: t('reactivity'),
      description: t('reactivity-desc')
    },
    {
      icon: Award,
      title: t('expertise'),
      description: t('expertise-desc')
    }
  ];

  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            {t('values-title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Les valeurs qui guident notre action au quotidien et définissent notre engagement envers nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-blue-400 transition-colors">
                <value.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {value.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
