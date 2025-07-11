
import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const CallToAction: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {t('cta-title')}
        </h2>
        <p className="text-xl mb-8 text-blue-100">
          {t('cta-subtitle')}
        </p>
        <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
          <Phone className="mr-2 h-5 w-5" />
          {t('cta-button')}
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
