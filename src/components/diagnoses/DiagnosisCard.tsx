import React, { useEffect, useState } from 'react';
import { Check, ChevronRight, X } from 'lucide-react';
import Button from '../ui/Button';
import type { Diagnosis } from '../../types/common';
import { useLanguage } from '../../contexts/LanguageContext';

interface DiagnosisCardProps extends Diagnosis {
  onClose: () => void;
}

const DiagnosisCard: React.FC<DiagnosisCardProps> = ({
  id,
  title,
  subtitle,
  description,
  symptoms = [],
  treatments = [],
  onClose
}) => {
  const [checkedSymptoms, setCheckedSymptoms] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<'symptoms' | 'treatment'>('symptoms');
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.src = `https://smsystem.b-cdn.net/images/${id}-image.png`;
    img.onload = () => setImageLoaded(true);
  }, [id]);

  const toggleSymptom = (id: string) => {
    setCheckedSymptoms(prev => 
      prev.includes(id) 
        ? prev.filter(s => s !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="bg-gradient-to-br from-white to-white/90 rounded-2xl shadow-xl overflow-hidden backdrop-blur-sm">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-600 hover:text-gray-900 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-3xl font-bold text-brand-navy mb-3">{title}</h3>
            <p className="text-xl text-brand-teal mb-6">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-100">
            <div className={`absolute inset-0 bg-gray-200 animate-pulse ${imageLoaded ? 'hidden' : ''}`} />
            <img 
              src={`https://smsystem.b-cdn.net/images/${id}-image.png`}
              alt={title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveSection('symptoms')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
              activeSection === 'symptoms'
                ? 'bg-brand-teal text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('diagnosis.symptoms') || 'Príznaky'}
          </button>
          <button
            onClick={() => setActiveSection('treatment')}
            className={`px-6 py-3 rounded-full text-lg font-medium transition-all duration-300 ${
              activeSection === 'treatment'
                ? 'bg-brand-teal text-white shadow-lg scale-105'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {t('diagnosis.treatment') || 'Liečba'}
          </button>
        </div>

        <div className="mb-12">
          {activeSection === 'symptoms' && symptoms.length > 0 ? (
            <>
              <h4 className="text-xl font-semibold text-brand-navy mb-6">
                📝 {t('diagnosis.interactive.symptoms') || 'Interaktívna sekcia – Skontrolujte si príznaky'}
              </h4>
              <div className="grid gap-4">
                {symptoms.map(symptom => (
                  <button
                    key={symptom.id}
                    onClick={() => toggleSymptom(symptom.id)}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 ${
                      checkedSymptoms.includes(symptom.id)
                        ? 'border-brand-teal bg-brand-teal/5 shadow-md scale-[1.02]'
                        : 'border-gray-200 hover:border-brand-teal/50'
                    }`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-300 ${
                      checkedSymptoms.includes(symptom.id)
                        ? 'border-brand-teal bg-brand-teal text-white'
                        : 'border-gray-300'
                    }`}>
                      {checkedSymptoms.includes(symptom.id) && <Check className="w-4 h-4" />}
                    </div>
                    <span className="text-gray-700 text-lg">{symptom.text}</span>
                  </button>
                ))}
              </div>
              {checkedSymptoms.length >= 2 && (
                <div className="mt-6 p-6 bg-brand-teal/10 rounded-xl">
                  <p className="text-brand-teal font-medium text-lg">
                    {t('diagnosis.recommendation') || `Zaškrtli ste ${checkedSymptoms.length} príznaky. Odporúčame absolvovať diagnostiku.`}
                  </p>
                </div>
              )}
            </>
          ) : activeSection === 'treatment' && treatments.length > 0 ? (
            <>
              <h4 className="text-xl font-semibold text-brand-navy mb-6">
                🏥 {t('diagnosis.treatment.title') || 'Liečba tohto problému'}
              </h4>
              <div className="grid gap-4">
                {treatments.map((treatment, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors">
                        <ChevronRight className="w-6 h-6 text-brand-teal" />
                      </div>
                      <div>
                        <h5 className="text-lg font-medium text-brand-navy mb-2">
                          {treatment.title}
                        </h5>
                        <p className="text-gray-600">
                          {treatment.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="text-center text-gray-600">
              {t('diagnosis.no.info') || 'Nie sú k dispozícii žiadne informácie pre túto sekciu.'}
            </div>
          )}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="rounded-full bg-brand-teal hover:bg-brand-teal-dark px-12 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.open('https://cal.com/dejvo/konzultacia', '_blank')}
          >
            {t('diagnosis.book.consultation') || 'Rezervovať konzultáciu'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisCard;