
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div 
      className="min-h-screen flex flex-col bg-gray-50 relative"
      style={{
        backgroundImage: 'url(/lovable-uploads/f0545566-5170-4c2e-b68b-2e85014d0619.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
