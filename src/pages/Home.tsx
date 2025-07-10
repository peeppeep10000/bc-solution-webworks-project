
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, Shield, Package, Phone, Truck } from 'lucide-react';

const Home: React.FC = () => {
  const { t } = useTranslation();

  const featuredProducts = [
    {
      name: 'Rails',
      image: '/lovable-uploads/a480809c-538b-4b0f-a7b2-494e65f37a03.png',
      description: 'Rails métalliques de haute qualité'
    },
    {
      name: 'Consoles',
      image: '/lovable-uploads/340ee761-1c8d-4454-8dd2-0bae3885734a.png',
      description: 'Consoles murales robustes'
    },
    {
      name: 'Griffe serre cadre',
      image: '/lovable-uploads/bb10962b-84a4-4a2b-bea3-e0213a7fddd5.png',
      description: 'Systèmes de fixation spécialisés'
    },
    {
      name: 'Bande butyle',
      image: '/lovable-uploads/8005c7ef-dde1-4d27-bdf3-44783389ce61.png',
      description: 'Solutions d\'étanchéité professionnelles'
    },
    {
      name: 'Visserie',
      image: '/lovable-uploads/3b14c170-16d1-4fbc-b435-c0ed06e81c12.png',
      description: 'Visserie technique spécialisée'
    }
  ];

  const qualityFeatures = [
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: 'Qualité',
      description: 'Produits certifiés aux normes DIN EN'
    },
    {
      icon: <Package className="w-8 h-8 text-blue-600" />,
      title: 'Stock permanent',
      description: 'Disponibilité garantie'
    },
    {
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      title: 'Service client réactif',
      description: 'Support technique expert'
    },
    {
      icon: <Truck className="w-8 h-8 text-blue-600" />,
      title: 'Livraison rapide',
      description: 'Logistique optimisée'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section - Image Principale */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-32">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80)'
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">BC Solution</h1>
          <p className="text-2xl md:text-3xl mb-8 leading-relaxed max-w-4xl mx-auto">
            Solutions de montage & supportage pour professionnels du bâtiment et de l'industrie
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Découvrir nos produits
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* 2. Montage Technique */}
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

      {/* 3. Zoom sur Produits Phares */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Produits Phares</h2>
            <p className="text-xl text-gray-600">
              Découvrez notre gamme de produits techniques professionnels
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 bg-white rounded-lg overflow-hidden">
                    <img 
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Carte de Couverture */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Couverture Nationale</h2>
              <p className="text-xl mb-8 opacity-90">
                Livraison rapide & présence nationale / maghrébine
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Truck className="w-6 h-6" />
                  <span className="text-lg">Livraison dans tout le Maroc</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Package className="w-6 h-6" />
                  <span className="text-lg">Stock disponible immédiatement</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6" />
                  <span className="text-lg">Support technique local</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80"
                  alt="Carte du Maroc"
                  className="w-full h-64 object-cover rounded-lg opacity-80"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Qualité & Normes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Qualité & Normes</h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">DIN EN</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">Galvanisation Z275</span>
              <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">ISO 9001</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualityFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Votre partenaire industriel de confiance
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Découvrez notre gamme complète de solutions techniques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Nos Produits
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              Nous Contacter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
