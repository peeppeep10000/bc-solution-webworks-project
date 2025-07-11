
import React from 'react';
import { Wrench, Cog, Shield, Truck } from 'lucide-react';

const TechnicalCapabilities: React.FC = () => {
  const capabilities = [
    {
      icon: Wrench,
      title: "Rails & Consoles",
      description: "Rails métalliques et consoles murales pour tous types d'installations industrielles"
    },
    {
      icon: Cog,
      title: "Profils Techniques",
      description: "Gamme complète de profils et éléments de fixation conformes aux normes"
    },
    {
      icon: Shield,
      title: "Étanchéité",
      description: "Solutions d'étanchéité professionnelles incluant bandes butyle et joints spécialisés"
    },
    {
      icon: Truck,
      title: "Visserie Industrielle",
      description: "Visserie technique et éléments de fixation pour applications industrielles"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Capacités Techniques
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
