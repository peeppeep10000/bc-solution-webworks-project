
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Products: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const productCategories = [
    {
      id: 1,
      name: 'Profil de montage et accessoires',
      description: 'Solutions complètes de profilés et accessoires de montage',
      image: '/lovable-uploads/a480809c-538b-4b0f-a7b2-494e65f37a03.png',
      color: 'bg-blue-500',
      route: '/products/profil-montage'
    },
    {
      id: 2,
      name: 'Rail et accessoires',
      description: 'Rails industriels et leurs accessoires',
      image: '/lovable-uploads/340ee761-1c8d-4454-8dd2-0bae3885734a.png',
      color: 'bg-green-500',
      route: '/products/rail-accessoires'
    },
    {
      id: 3,
      name: 'Visserie et fixation',
      description: 'Éléments de visserie et systèmes de fixation',
      image: '/lovable-uploads/bb10962b-84a4-4a2b-bea3-e0213a7fddd5.png',
      color: 'bg-purple-500',
      route: '/products/visserie-fixation'
    },
    {
      id: 4,
      name: 'Chemin de câble',
      description: 'Solutions de cheminement de câbles',
      image: '/lovable-uploads/8005c7ef-dde1-4d27-bdf3-44783389ce61.png',
      color: 'bg-orange-500',
      route: '/products/chemin-cable'
    },
    {
      id: 5,
      name: 'Étanchéité',
      description: 'Produits et solutions d\'étanchéité',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80',
      color: 'bg-red-500',
      route: '/products/etancheite'
    }
  ];

  const handleCategoryClick = (route: string) => {
    console.log(`Navigating to ${route}`);
    navigate(route);
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
                onClick={() => handleCategoryClick(category.route)}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
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
