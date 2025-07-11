
import React from 'react';
import { Wrench, Cog, Shield, Truck } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const TechnicalCapabilities: React.FC = () => {
  const { t } = useTranslation();

  const capabilities = [
    {
      icon: Wrench,
      title: t('rails-consoles'),
      description: t('rails-consoles-desc')
    },
    {
      icon: Cog,
      title: t('profils-techniques'),
      description: t('profils-techniques-desc')
    },
    {
      icon: Shield,
      title: t('etancheite'),
      description: t('etancheite-desc')
    },
    {
      icon: Truck,
      title: t('visserie-industrielle'),
      description: t('visserie-industrielle-desc')
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('technical-capabilities')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète dans les solutions de montage et supportage industriel
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="text-center group">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <capability.icon className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {capability.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalCapabilities;
