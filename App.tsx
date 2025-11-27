
import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import PaymentMethods from './components/PaymentMethods';
import Services from './components/Services';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="bg-white dark:bg-black transition-colors duration-300">
          <Header />
          <main>
            <Hero />
            <PaymentMethods />
            <Services />
            <Features />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
