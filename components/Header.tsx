
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { SunIcon, MoonIcon } from './icons';

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-brand-blue">
          {language === 'ar' ? 'مدفوعة' : 'madfoaa'}
        </h1>
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <a href="#" className="text-gray-700 dark:text-yellow-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('nav.home')}</a>
          <a href="#services" className="text-gray-700 dark:text-yellow-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('nav.services')}</a>
          <a href="#features" className="text-gray-700 dark:text-yellow-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('nav.features')}</a>
          <a href="#footer" className="text-gray-700 dark:text-yellow-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('nav.contact')}</a>
        </nav>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <MoonIcon className="w-6 h-6" /> : <SunIcon className="w-6 h-6" />}
          </button>
          <button
            onClick={toggleLanguage}
            className="font-semibold text-gray-700 dark:text-yellow-400 hover:text-brand-blue dark:hover:text-white transition-colors"
            aria-label="Toggle language"
          >
            {language === 'en' ? 'عربي' : 'EN'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
