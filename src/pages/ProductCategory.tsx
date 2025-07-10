
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCategory: React.FC = () => {
  const { category } = useParams<{ category: string }>();

  const categoryNames: { [key: string]: string } = {
    'profil-montage': 'Profil de montage et accessoires',
    'rail-accessoires': 'Rail et accessoires',
    'visserie-fixation': 'Visserie et fixation',
    'chemin-cable': 'Chemin de câble',
    'etancheite': 'Étanchéité'
  };

  const categoryName = categoryNames[category || ''] || 'Catégorie inconnue';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/products" className="inline-flex items-center text-white hover:text-blue-200 mb-4 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux produits
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {categoryName}
          </h1>
          <p className="text-xl opacity-90">
            Découvrez nos solutions dans cette catégorie
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Produits en cours d'ajout
            </h2>
            <p className="text-gray-600 text-lg mb-6">
              Cette section sera bientôt remplie avec tous nos produits de la catégorie "{categoryName}".
            </p>
            <p className="text-gray-600 mb-8">
              En attendant, n'hésitez pas à nous contacter directement pour plus d'informations sur nos produits disponibles.
            </p>
            <Button asChild>
              <Link to="/products">
                Retour aux catégories
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCategory;
