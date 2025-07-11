
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';

const CompanyStory: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Notre Expertise
            </h2>
            <div className="prose prose-lg text-gray-700 space-y-6">
              <p>
                BC Solution accompagne les acteurs de l'industrie en fournissant des solutions techniques spécialisées dans le montage et le supportage industriel.
              </p>
              <p>
                Rails métalliques, consoles murales, profils techniques, systèmes de fixation... chaque produit est soigneusement sélectionné pour garantir fiabilité, durabilité et conformité aux standards industriels les plus exigeants.
              </p>
              <p>
                Grâce à notre expertise métier et à une gestion réactive des approvisionnements, nous assurons la continuité et la sécurité de vos installations industrielles.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Installation industrielle"
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Atelier technique"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyStory;
