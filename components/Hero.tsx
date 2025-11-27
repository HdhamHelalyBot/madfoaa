
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-yellow-400 mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10">
            {t('hero.subtitle')}
          </p>
          <button className="bg-brand-blue hover:bg-opacity-90 text-white font-bold py-4 px-10 rounded-lg text-lg transition-transform transform hover:scale-105">
            {t('hero.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
