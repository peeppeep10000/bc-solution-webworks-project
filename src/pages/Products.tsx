
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ArrowRight } from 'lucide-react';

const Products: React.FC = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 1,
      name: t('product-category') + ' 1',
      description: 'Description du produit à venir',
      icon: '🔧',
      color: 'bg-blue-500'
    },
    {
      id: 2,
      name: t('product-category') + ' 2',
      description: 'Description du produit à venir',
      icon: '⚙️',
      color: 'bg-green-500'
    },
    {
      id: 3,
      name: t('product-category') + ' 3',
      description: 'Description du produit à venir',
      icon: '🔩',
      color: 'bg-purple-500'
    },
    {
      id: 4,
      name: t('product-category') + ' 4',
      description: 'Description du produit à venir',
      icon: '🏗️',
      color: 'bg-orange-500'
    },
    {
      id: 5,
      name: t('product-category') + ' 5',
      description: 'Description du produit à venir',
      icon: '🔌',
      color: 'bg-red-500'
    }
  ];

  const handleCategoryClick = (categoryId: number) => {
    console.log(`Clicked category ${categoryId}`);
    // This will be implemented later with actual routing
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('products-title')}
          </h1>
          <p className="text-xl text-center opacity-90">
            Découvrez notre gamme complète de solutions industrielles
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className={`${category.color} h-32 flex items-center justify-center`}>
                  <span className="text-4xl">{category.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-blue-600 font-medium">
                    <span>Voir les produits</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="bg-blue-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Catalogue en cours de développement
          </h2>
          <p className="text-gray-600 text-lg">
            Nos équipes travaillent actuellement sur l'ajout de tous nos produits. 
            Contactez-nous directement pour plus d'informations sur nos solutions disponibles.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Products;
