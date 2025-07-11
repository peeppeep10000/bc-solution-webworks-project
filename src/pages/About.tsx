
import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import AboutHero from '../components/AboutHero';
import CompanyStory from '../components/CompanyStory';
import TechnicalCapabilities from '../components/TechnicalCapabilities';
import QualityCommitment from '../components/QualityCommitment';
import TeamValues from '../components/TeamValues';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50">
      <AboutHero />
      <CompanyStory />
      <TechnicalCapabilities />
      <QualityCommitment />
      <TeamValues />
    </div>
  );
};

export default About;
