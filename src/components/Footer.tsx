
import React from 'react';
import { Facebook, Instagram, Music } from 'lucide-react';
import { useTranslation } from '../contexts/TranslationContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t('company-name')}</h3>
            <p className="text-gray-400 text-sm">
              Solutions industrielles professionnelles pour tous vos besoins techniques.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t('contact')}</h3>
            <div className="text-gray-400 text-sm space-y-2">
              <p>Email: contact@bcsolution.com</p>
              <p>Téléphone: +33 1 23 45 67 89</p>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t('follow-us')}</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="TikTok"
              >
                <Music className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 BC Solution. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
