
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();
  return (
    <footer id="footer" className="bg-gray-100 dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-start rtl:md:text-right">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-brand-blue mb-2">
              {language === 'ar' ? 'مدفوعة' : 'madfoaa'}
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.description')}
            </p>
          </div>
          
          <div/>

          <div className="md:col-span-1 text-center md:text-start rtl:md:text-right">
             <h3 className="font-bold text-gray-800 dark:text-yellow-400 mb-4 uppercase tracking-wider">{language === 'ar' ? 'روابط هامة' : 'Legal'}</h3>
             <ul className="space-y-2">
               <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('footer.terms')}</a></li>
               <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-brand-blue dark:hover:text-white transition-colors">{t('footer.privacy')}</a></li>
             </ul>
           </div>
        </div>
        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 dark:text-gray-400">
          <p className="mb-2">{t('footer.address')}</p>
          <p>&copy; {new Date().getFullYear()} Madfoaa. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
