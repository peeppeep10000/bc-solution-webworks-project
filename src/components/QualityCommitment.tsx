
import React from 'react';
import { Award, CheckCircle, Zap, Users } from 'lucide-react';

const QualityCommitment: React.FC = () => {
  const commitments = [
    {
      icon: CheckCircle,
      title: "Qualité Certifiée",
      description: "Conformité DIN EN et galvanisation Z275 pour une durabilité maximale"
    },
    {
      icon: Award,
      title: "Stock Permanent",
      description: "Disponibilité immédiate des produits essentiels pour vos projets"
    },
    {
      icon: Zap,
      title: "Service Réactif",
      description: "Réponse rapide à vos demandes techniques et commerciales"
    },
    {
      icon: Users,
      title: "Livraison Rapide",
      description: "Réseau de distribution efficace pour un service national"
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Notre Engagement Qualité
          </h2>
          <p className="text-xl text-gray-600">
            Des standards élevés pour garantir votre satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((commitment, index) => (
            <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <commitment.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {commitment.title}
              </h3>
              <p className="text-gray-600">
                {commitment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityCommitment;
