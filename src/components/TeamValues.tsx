
import React from 'react';

const TeamValues: React.FC = () => {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">
              Nos Valeurs
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Excellence Technique</h3>
                  <p className="text-blue-100">
                    Sélection rigoureuse de produits techniques conformes aux standards industriels
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Proximité Client</h3>
                  <p className="text-blue-100">
                    Accompagnement personnalisé et conseils techniques adaptés à vos besoins
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 rounded-full p-2 flex-shrink-0">
                  <span className="text-white font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Continue</h3>
                  <p className="text-blue-100">
                    Veille technologique permanente pour proposer les meilleures solutions
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
            <blockquote className="text-xl italic mb-6">
              "Chez BC Solution, nous croyons que chaque projet mérite des solutions techniques de qualité supérieure. Notre mission est de vous accompagner dans la réussite de vos installations industrielles."
            </blockquote>
            <cite className="text-blue-200 font-semibold">
              — Équipe BC Solution
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamValues;
