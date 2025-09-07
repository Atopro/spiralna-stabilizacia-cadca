import React from 'react';
import Section from '../ui/Section';
import { Users, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';

const TrainingsSection = () => {
  const { t } = useLanguage();
  
  return (
    <Section
      id="trainings"
      title={t('trainings.title')}
      subtitle={t('trainings.subtitle')}
    >
      <div className="grid gap-8 md:grid-cols-2">
        {/* Individuálny tréning */}
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
          <div className="aspect-w-4 aspect-h-3 mb-6">
            <img 
              src="assets/images/individual-image.jpg"
              alt="Individuálny tréning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{t('trainings.individual.title')}</h3>
            <p className="mb-6 text-gray-600">
              {t('trainings.individual.desc')}
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.individual.benefit1')}
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.individual.benefit2')}
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.individual.benefit3')}
              </li>
            </ul>
            <Button 
              className="w-full rounded-full bg-brand-teal hover:bg-brand-teal-dark transition-all duration-300"
              onClick={() => window.open('https://cal.com/dejvo/konzultacia', '_blank')}
            >
              {t('trainings.book.btn')}
            </Button>
          </div>
        </div>

        {/* Skupinový tréning */}
        <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
          <div className="aspect-w-4 aspect-h-3 mb-6">
            <img 
              src="assets/images/skupinovka-image.jpg"
              alt="Skupinový tréning"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">{t('trainings.group.title')}</h3>
            <p className="mb-6 text-gray-600">
              {t('trainings.group.desc')}
            </p>
            <ul className="mb-8 space-y-3">
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.group.benefit1')}
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.group.benefit2')}
              </li>
              <li className="flex items-center text-gray-600">
                <ArrowRight className="mr-2 h-5 w-5 text-primary-500" />
                {t('trainings.group.benefit3')}
              </li>
            </ul>
            <Button 
              className="w-full rounded-full bg-brand-teal hover:bg-brand-teal-dark transition-all duration-300"
              onClick={() => window.open('https://cal.com/dejvo/skupinovy-trening', '_blank')}
            >
              {t('trainings.book.btn')}
            </Button>
          </div>
        </div>
      </div>

      {/* All Services Button */}
      <div className="mt-12 text-center">
        <Link to="/sluzby">
          <Button 
            size="lg"
            className="rounded-full bg-brand-teal hover:bg-brand-teal-dark px-8 text-base hover:scale-105 transition-all duration-300"
          >
            {t('trainings.all.btn')}
          </Button>
        </Link>
      </div>
    </Section>
  );
};

export default TrainingsSection;