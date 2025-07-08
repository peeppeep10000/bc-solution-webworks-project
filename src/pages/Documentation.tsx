
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Download, FileText, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Documentation: React.FC = () => {
  const { t } = useTranslation();

  const handleDownloadPDF = () => {
    // This will be implemented once the PDF is uploaded
    console.log('Download PDF clicked');
    // For now, show an alert
    alert('PDF sera disponible une fois le fichier uploadé');
  };

  const handleViewPDF = () => {
    // This will be implemented once the PDF is uploaded
    console.log('View PDF clicked');
    // For now, show an alert
    alert('PDF sera disponible une fois le fichier uploadé');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            {t('documentation-title')}
          </h1>
          <p className="text-xl text-center opacity-90">
            Accédez à toute notre documentation technique
          </p>
        </div>
      </section>

      {/* Documentation Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Documentation BC Solutions
              </h2>
              <p className="text-gray-600">
                Consultez ou téléchargez notre documentation complète
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={handleViewPDF}
                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                <Eye className="h-5 w-5" />
                {t('view-pdf')}
              </Button>
              
              <Button
                onClick={handleDownloadPDF}
                variant="outline"
                className="flex items-center justify-center gap-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                size="lg"
              >
                <Download className="h-5 w-5" />
                {t('download-pdf')}
              </Button>
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">Note:</h3>
              <p className="text-blue-700 text-sm">
                Pour accéder à la documentation complète, veuillez uploader le fichier "BC solutions.pdf" 
                via l'interface d'administration. Une fois uploadé, les boutons ci-dessus permettront 
                de visualiser et télécharger le document.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Ressources supplémentaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Guides techniques</h3>
              <p className="text-gray-600 text-sm">Prochainement disponible</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Fiches produits</h3>
              <p className="text-gray-600 text-sm">Prochainement disponible</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-2">Certifications</h3>
              <p className="text-gray-600 text-sm">Prochainement disponible</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
