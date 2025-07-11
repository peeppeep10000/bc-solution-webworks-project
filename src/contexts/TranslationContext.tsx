
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
    'hero-title': 'Solutions de montage & supportage pour professionnels du bâtiment et de l\'industrie',
    'hero-subtitle': 'BC Solution accompagne les acteurs de l\'industrie avec des solutions techniques spécialisées dans le montage industriel.',
    'hero-cta': 'Découvrir nos produits',
    'cable-tray': 'Chemin de câble',
    'consumable': 'Consommable',
    'fixing-system': 'Système de fixation',
    'featured-products-title': 'Produits Phares',
    'featured-products-subtitle': 'Découvrez notre gamme de produits techniques professionnels',
    'technical-expertise-title': 'Expertise Technique',
    'technical-expertise-subtitle': 'Des solutions complètes pour vos projets industriels',
    'quality-standards-title': 'Standards de Qualité',
    'quality-standards-subtitle': 'Conformité et excellence dans tous nos produits',
    'coverage-title': 'Couverture Nationale',
    'coverage-subtitle': 'Service et livraison dans tout le Maroc',
    'cta-title': 'Besoin d\'une solution sur mesure ?',
    'cta-subtitle': 'Contactez nos experts pour un conseil personnalisé',
    'cta-button': 'Nous contacter',
    
    // About page
    'about-title': 'À propos de BC Solutions',
    'about-subtitle': 'Solutions de montage & supportage pour professionnels du bâtiment et de l\'industrie',
    'our-expertise': 'Notre Expertise',
    'our-story': 'Notre Histoire',
    'our-mission': 'Notre Mission',
    'our-values': 'Nos Valeurs',
    'our-team': 'Notre Équipe',
    'company-overview': 'Présentation de l\'entreprise',
    'technical-capabilities': 'Nos Capacités Techniques',
    'quality-commitment': 'Notre Engagement Qualité',
    'experience-years': 'Années d\'expérience',
    'satisfied-clients': 'Clients satisfaits',
    'products-delivered': 'Produits livrés',
    'national-coverage': 'Couverture nationale',
    
    // About content
    'about-story-title': 'Une expertise qui se construit',
    'about-story-text': 'Fondée avec pour mission d\'accompagner les professionnels du bâtiment et de l\'industrie, BC Solution s\'est imposée comme un partenaire de confiance dans le domaine des solutions de montage et supportage.\n\nNotre croissance s\'appuie sur une compréhension approfondie des besoins industriels et une sélection rigoureuse de produits conformes aux standards les plus exigeants.',
    'mission-title': 'Notre Mission',
    'mission-text': 'Fournir des solutions techniques fiables et durables pour les installations industrielles, en garantissant qualité, conformité et réactivité à nos clients professionnels.',
    'values-title': 'Nos Valeurs Fondamentales',
    'excellence': 'Excellence',
    'excellence-desc': 'Recherche constante de la qualité dans nos produits et services',
    'reliability': 'Fiabilité',
    'reliability-desc': 'Engagement sur la durabilité et la conformité de nos solutions',
    'reactivity': 'Réactivité',
    'reactivity-desc': 'Service client rapide et gestion efficace des approvisionnements',
    'expertise': 'Expertise',
    'expertise-desc': 'Connaissance technique approfondie de nos domaines d\'intervention',
    
    // Products page
    'products-title': 'Nos Produits',
    'products-subtitle': 'Découvrez notre gamme complète de solutions industrielles',
    'product-category': 'Catégorie de produit',
    'see-products': 'Voir les produits',
    'catalog-development': 'Catalogue en cours de développement',
    'catalog-development-text': 'Nos équipes travaillent actuellement sur l\'ajout de tous nos produits. Contactez-nous directement pour plus d\'informations sur nos solutions disponibles.',
    'back-to-products': 'Retour aux produits',
    'back-to-categories': 'Retour aux catégories',
    'products-being-added': 'Produits en cours d\'ajout',
    'contact-for-info': 'En attendant, n\'hésitez pas à nous contacter directement pour plus d\'informations sur nos produits disponibles.',
    
    // Product names
    'rails': 'Rails',
    'rails-desc': 'Rails métalliques de haute qualité',
    'consoles': 'Consoles',
    'consoles-desc': 'Consoles murales robustes',
    'griffe-serre-cadre': 'Griffe serre cadre',
    'griffe-desc': 'Systèmes de fixation spécialisés',
    'bande-butyle': 'Bande butyle',
    'bande-desc': 'Solutions d\'étanchéité professionnelles',
    'visserie': 'Visserie',
    'visserie-desc': 'Visserie technique spécialisée',
    'robinet': 'Robinetterie',
    'robinet-desc': 'Robinets et vannes industriels',
    
    // Technical capabilities
    'rails-consoles': 'Rails & Consoles',
    'rails-consoles-desc': 'Rails métalliques et consoles murales pour tous types d\'installations industrielles',
    'profils-techniques': 'Profils Techniques',
    'profils-techniques-desc': 'Gamme complète de profils et éléments de fixation conformes aux normes',
    'etancheite': 'Étanchéité',
    'etancheite-desc': 'Solutions d\'étanchéité professionnelles incluant bandes butyle et joints spécialisés',
    'visserie-industrielle': 'Visserie Industrielle',
    'visserie-industrielle-desc': 'Visserie technique et éléments de fixation pour applications industrielles',
    
    // Quality commitments
    'quality-certified': 'Qualité Certifiée',
    'quality-certified-desc': 'Conformité DIN EN et galvanisation Z275 pour une durabilité maximale',
    'permanent-stock': 'Stock Permanent',
    'permanent-stock-desc': 'Disponibilité immédiate des produits essentiels pour vos projets',
    'reactive-service': 'Service Réactif',
    'reactive-service-desc': 'Réponse rapide à vos demandes techniques et commerciales',
    'fast-delivery': 'Livraison Rapide',
    'fast-delivery-desc': 'Réseau de distribution efficace pour un service national',
    
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
    'hero-title': 'Mounting & Support Solutions for Building and Industry Professionals',
    'hero-subtitle': 'BC Solution supports industry players with specialized technical solutions in industrial mounting.',
    'hero-cta': 'Discover our products',
    'cable-tray': 'Cable Tray',
    'consumable': 'Consumable',
    'fixing-system': 'Fixing System',
    'featured-products-title': 'Featured Products',
    'featured-products-subtitle': 'Discover our range of professional technical products',
    'technical-expertise-title': 'Technical Expertise',
    'technical-expertise-subtitle': 'Complete solutions for your industrial projects',
    'quality-standards-title': 'Quality Standards',
    'quality-standards-subtitle': 'Compliance and excellence in all our products',
    'coverage-title': 'National Coverage',
    'coverage-subtitle': 'Service and delivery throughout Morocco',
    'cta-title': 'Need a custom solution?',
    'cta-subtitle': 'Contact our experts for personalized advice',
    'cta-button': 'Contact us',
    
    // About page
    'about-title': 'About BC Solutions',
    'about-subtitle': 'Mounting & Support Solutions for Building and Industry Professionals',
    'our-expertise': 'Our Expertise',
    'our-story': 'Our Story',
    'our-mission': 'Our Mission',
    'our-values': 'Our Values',
    'our-team': 'Our Team',
    'company-overview': 'Company Overview',
    'technical-capabilities': 'Our Technical Capabilities',
    'quality-commitment': 'Our Quality Commitment',
    'experience-years': 'Years of experience',
    'satisfied-clients': 'Satisfied clients',
    'products-delivered': 'Products delivered',
    'national-coverage': 'National coverage',
    
    // About content
    'about-story-title': 'Building expertise',
    'about-story-text': 'Founded with the mission to support building and industry professionals, BC Solution has established itself as a trusted partner in mounting and support solutions.\n\nOur growth is based on a deep understanding of industrial needs and rigorous selection of products that meet the most demanding standards.',
    'mission-title': 'Our Mission',
    'mission-text': 'To provide reliable and durable technical solutions for industrial installations, guaranteeing quality, compliance and responsiveness to our professional clients.',
    'values-title': 'Our Core Values',
    'excellence': 'Excellence',
    'excellence-desc': 'Constant pursuit of quality in our products and services',
    'reliability': 'Reliability',
    'reliability-desc': 'Commitment to durability and compliance of our solutions',
    'reactivity': 'Responsiveness',
    'reactivity-desc': 'Fast customer service and efficient supply management',
    'expertise': 'Expertise',
    'expertise-desc': 'Deep technical knowledge of our intervention areas',
    
    // Products page
    'products-title': 'Our Products',
    'products-subtitle': 'Discover our complete range of industrial solutions',
    'product-category': 'Product Category',
    'see-products': 'View products',
    'catalog-development': 'Catalog under development',
    'catalog-development-text': 'Our teams are currently working on adding all our products. Contact us directly for more information about our available solutions.',
    'back-to-products': 'Back to products',
    'back-to-categories': 'Back to categories',
    'products-being-added': 'Products being added',
    'contact-for-info': 'In the meantime, please contact us directly for more information about our available products.',
    
    // Product names
    'rails': 'Rails',
    'rails-desc': 'High-quality metal rails',
    'consoles': 'Consoles',
    'consoles-desc': 'Robust wall consoles',
    'griffe-serre-cadre': 'Frame clamp',
    'griffe-desc': 'Specialized fixing systems',
    'bande-butyle': 'Butyl tape',
    'bande-desc': 'Professional sealing solutions',
    'visserie': 'Hardware',
    'visserie-desc': 'Specialized technical hardware',
    'robinet': 'Valves',
    'robinet-desc': 'Industrial taps and valves',
    
    // Technical capabilities
    'rails-consoles': 'Rails & Consoles',
    'rails-consoles-desc': 'Metal rails and wall consoles for all types of industrial installations',
    'profils-techniques': 'Technical Profiles',
    'profils-techniques-desc': 'Complete range of profiles and fixing elements compliant with standards',
    'etancheite': 'Sealing',
    'etancheite-desc': 'Professional sealing solutions including butyl tapes and specialized joints',
    'visserie-industrielle': 'Industrial Hardware',
    'visserie-industrielle-desc': 'Technical hardware and fixing elements for industrial applications',
    
    // Quality commitments
    'quality-certified': 'Certified Quality',
    'quality-certified-desc': 'DIN EN compliance and Z275 galvanization for maximum durability',
    'permanent-stock': 'Permanent Stock',
    'permanent-stock-desc': 'Immediate availability of essential products for your projects',
    'reactive-service': 'Reactive Service',
    'reactive-service-desc': 'Quick response to your technical and commercial requests',
    'fast-delivery': 'Fast Delivery',
    'fast-delivery-desc': 'Efficient distribution network for national service',
    
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
