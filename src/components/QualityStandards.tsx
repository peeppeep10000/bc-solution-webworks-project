
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Shield, Package, Phone, Truck } from 'lucide-react';

const QualityStandards: React.FC = () => {
  const qualityFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Qualité',
      description: 'Produits certifiés aux normes DIN EN'
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: 'Stock permanent',
      description: 'Disponibilité garantie'
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Service client réactif',
      description: 'Support technique expert'
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: 'Livraison rapide',
      description: 'Logistique optimisée'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Qualité & Normes</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">DIN EN</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Galvanisation Z275</span>
            <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">ISO 9001</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualityFeatures.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
