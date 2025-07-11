
import React from 'react';
import Hero from '../components/Hero';
import TechnicalExpertise from '../components/TechnicalExpertise';
import FeaturedProducts from '../components/FeaturedProducts';
import CoverageMap from '../components/CoverageMap';
import QualityStandards from '../components/QualityStandards';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <TechnicalExpertise />
      <FeaturedProducts />
      <CoverageMap />
      <QualityStandards />
      <CallToAction />
    </div>
  );
};

export default Home;
