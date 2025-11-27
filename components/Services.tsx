import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = t('services.items') as unknown as { title: string, description: string }[];
  
  const serviceImages = [
    'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=500&auto=format&fit=crop&q=60', // Electronic Payments
    'https://images.unsplash.com/photo-1583523738403-c4b6d14979a4?w=500&auto=format&fit=crop&q=60', // Smart POS
    'https://images.unsplash.com/photo-1604436924940-d63b51688b8f?w=500&auto=format&fit=crop&q=60', // Payment Links
    'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=500&auto=format&fit=crop&q=60', // Installment Plans
    'https://images.unsplash.com/photo-1593344484962-796b16d8a2a4?w=500&auto=format&fit=crop&q=60', // E-Wallet Payments
    'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60', // Subscription Management
    'https://images.unsplash.com/photo-1554224155-1696413565d3?w=500&auto=format&fit=crop&q=60'  // Payroll Services
  ];

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
              <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                <img src={serviceImages[index]} alt={service.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-3">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
