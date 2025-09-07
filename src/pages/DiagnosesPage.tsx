import React from 'react';
import { useInView } from '../hooks/useInView';
import DiagnosisTimeline from '../components/diagnoses/DiagnosisTimeline';
import { Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const DiagnosesPage = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy via-[#0E5A6F] to-brand-aqua">
      <main className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center bg-transparent text-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t('diagnosespage.title')}</h1>
          <h3 className="text-xl md:text-2xl text-brand-aqua mb-6">
            {t('diagnosespage.subtitle')}
          </h3>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            {t('diagnosespage.intro')}
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-transparent">
        <div className="max-w-6xl mx-auto">
          <DiagnosisTimeline />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 mb-20">
        <div className="max-w-4xl mx-auto">
          <div className="mt-16 text-center bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t('diagnosespage.cta')}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {t('common.call.consultation')}
            </p>
            <a
              href="tel:+421948525380"
              className="inline-flex items-center gap-2 text-2xl font-semibold text-white hover:text-white bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="w-6 h-6" />
              {t('common.phone')}
            </a>
          </div>
        </div>
      </section>
      </main>
    </div>
  );
};

export default DiagnosesPage;