
import React from 'react';
import { Award, CheckCircle, Zap, Users } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const QualityCommitment: React.FC = () => {
  const { t } = useTranslation();

  const commitments = [
    {
      icon: CheckCircle,
      title: t('quality-certified'),
      description: t('quality-certified-desc')
    },
    {
      icon: Award,
      title: t('permanent-stock'),
      description: t('permanent-stock-desc')
    },
    {
      icon: Zap,
      title: t('reactive-service'),
      description: t('reactive-service-desc')
    },
    {
      icon: Users,
      title: t('fast-delivery'),
      description: t('fast-delivery-desc')
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('quality-commitment')}
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
