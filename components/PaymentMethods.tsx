
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { VisaIcon, MastercardIcon, MeezaIcon } from './icons';

const PaymentMethods: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
          {t('paymentMethods.title')}
        </h3>
        <div className="flex justify-center items-center space-x-12 rtl:space-x-reverse">
          <VisaIcon className="h-8 text-gray-500 dark:text-gray-400 opacity-80 hover:opacity-100 transition-opacity" />
          <MastercardIcon className="h-10 text-gray-500 dark:text-gray-400 opacity-80 hover:opacity-100 transition-opacity" />
          <MeezaIcon className="h-10 text-gray-500 dark:text-gray-400 opacity-80 hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
