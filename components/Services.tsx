
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCardIcon } from './icons';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = t('services.items') as unknown as { title: string, description: string }[];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-yellow-400 mb-4">
            {t('services.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('services.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="bg-brand-blue text-white rounded-full p-3 w-14 h-14 mb-6 flex items-center justify-center">
                <CreditCardIcon className="w-8 h-8"/>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
