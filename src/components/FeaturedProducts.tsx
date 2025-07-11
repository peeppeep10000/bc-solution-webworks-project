
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { useTranslation } from '../contexts/TranslationContext';

const FeaturedProducts: React.FC = () => {
  const { t } = useTranslation();

  const featuredProducts = [
    {
      name: t('rails'),
      image: '/lovable-uploads/a480809c-538b-4b0f-a7b2-494e65f37a03.png',
      description: t('rails-desc')
    },
    {
      name: t('consoles'),
      image: '/lovable-uploads/340ee761-1c8d-4454-8dd2-0bae3885734a.png',
      description: t('consoles-desc')
    },
    {
      name: t('griffe-serre-cadre'),
      image: '/lovable-uploads/bb10962b-84a4-4a2b-bea3-e0213a7fddd5.png',
      description: t('griffe-desc')
    },
    {
      name: t('bande-butyle'),
      image: '/lovable-uploads/8005c7ef-dde1-4d27-bdf3-44783389ce61.png',
      description: t('bande-desc')
    },
    {
      name: t('robinet'),
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      description: t('robinet-desc')
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{t('featured-products-title')}</h2>
          <p className="text-xl text-gray-600">
            {t('featured-products-subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {featuredProducts.map((product, index) => (
            <Link key={index} to="/products" className="group">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 bg-white rounded-lg overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
