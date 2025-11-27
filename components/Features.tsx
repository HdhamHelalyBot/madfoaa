
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheckIcon, ChartBarIcon, CodeIcon } from './icons';

const iconMap = [ShieldCheckIcon, ChartBarIcon, CodeIcon, ShieldCheckIcon];

const Features: React.FC = () => {
  const { t } = useLanguage();
  const features = t('features.items') as unknown as { title: string, description: string }[];

  return (
    <section id="features" className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-yellow-400 mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <div key={index} className="text-center p-6">
                 <div className="flex justify-center items-center mb-6">
                  <div className="bg-yellow-400 dark:bg-brand-blue text-brand-blue dark:text-yellow-400 rounded-full p-4">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-yellow-400 mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
