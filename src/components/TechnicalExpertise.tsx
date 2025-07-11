
import React from 'react';
import { Shield, Package, CheckCircle } from 'lucide-react';

const TechnicalExpertise: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Expertise Technique</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Solutions complètes de rails métalliques, consoles murales et profils techniques
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rails Métalliques</h3>
                <p className="text-gray-600">Systèmes de rails haute résistance pour supportage industriel</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Package className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Consoles Murales</h3>
                <p className="text-gray-600">Fixations murales robustes pour installations techniques</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CheckCircle className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Profils Techniques</h3>
                <p className="text-gray-600">Profilés spécialisés pour constructions industrielles</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-8">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
              alt="Installation technique"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExpertise;
