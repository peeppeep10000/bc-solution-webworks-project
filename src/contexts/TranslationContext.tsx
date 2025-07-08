
import React, { createContext, useContext, useState } from 'react';

interface TranslationContextType {
  language: 'fr' | 'en';
  setLanguage: (lang: 'fr' | 'en') => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

const translations = {
  fr: {
    // Navigation
    home: 'Accueil',
    about: 'À propos',
    products: 'Produits',
    documentation: 'Documentation',
    
    // Home page
    'cable-tray': 'Chemin de câble',
    'consumable': 'Consommable',
    'fixing-system': 'Système de fixation',
    
    // About page
    'about-title': 'À propos de BC Solutions',
    'about-text': 'BC Solutions accompagne les acteurs de l\'industrie en fournissant des pièces consommables techniques indispensables au bon fonctionnement de leurs équipements.\n\nRails de fixation, profils, éléments d\'étanchéité, chemins de câbles… chaque produit est soigneusement sélectionné pour garantir fiabilité, durabilité et conformité aux standards industriels.\n\nGrâce à notre expertise métier et à une gestion réactive des approvisionnements, nous assurons la continuité et la sécurité de vos installations, tout en répondant rapidement à vos exigences techniques.\n\nAvec BC Solutions, bénéficiez d\'un service orienté résultats, conçu pour soutenir vos performances au quotidien.',
    
    // Products page
    'products-title': 'Nos Produits',
    'product-category': 'Catégorie de produit',
    
    // Documentation page
    'documentation-title': 'Documentation',
    'download-pdf': 'Télécharger la documentation',
    'view-pdf': 'Voir la documentation',
    
    // Footer
    'follow-us': 'Suivez-nous',
    'contact': 'Contact',
    'company-name': 'BC Solution'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    products: 'Products',
    documentation: 'Documentation',
    
    // Home page
    'cable-tray': 'Cable Tray',
    'consumable': 'Consumable',
    'fixing-system': 'Fixing System',
    
    // About page
    'about-title': 'About BC Solutions',
    'about-text': 'BC Solutions supports industrial players by providing technical consumable parts essential for the proper functioning of their equipment.\n\nFixing rails, profiles, sealing elements, cable trays... each product is carefully selected to guarantee reliability, durability and compliance with industrial standards.\n\nThanks to our business expertise and responsive supply management, we ensure the continuity and security of your installations, while quickly responding to your technical requirements.\n\nWith BC Solutions, benefit from a results-oriented service, designed to support your daily performance.',
    
    // Products page
    'products-title': 'Our Products',
    'product-category': 'Product Category',
    
    // Documentation page
    'documentation-title': 'Documentation',
    'download-pdf': 'Download Documentation',
    'view-pdf': 'View Documentation',
    
    // Footer
    'follow-us': 'Follow Us',
    'contact': 'Contact',
    'company-name': 'BC Solution'
  }
};

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['fr']] || key;
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
