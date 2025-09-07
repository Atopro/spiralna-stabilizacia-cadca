import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

const ContactForm = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission (replace with actual endpoint later)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  return (
    <div className="bg-brand-navy/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl w-full max-w-lg mx-auto lg:mx-0">
      <form 
        className="space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="text-center mb-6">
          <h3 className="text-xl font-bold text-white mb-2">{t('contact.form.title')}</h3>
          <p className="text-white/80 text-sm">{t('contact.form.subtitle')}</p>
        </div>

        <div>
          <label htmlFor="name" className="block text-white mb-2 font-medium">
            {t('contact.form.name')} <span className="text-brand-teal">{t('common.required')}</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:bg-white/15 transition-all placeholder-white/50 border border-white/20"
            placeholder={t('contact.form.name.placeholder')}
            disabled={isSubmitting}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-white mb-2 font-medium">
              {t('contact.form.email')} <span className="text-brand-teal">{t('common.required')}</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:bg-white/15 transition-all placeholder-white/50 border border-white/20"
              placeholder={t('contact.form.email.placeholder')}
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-white mb-2 font-medium">
              {t('contact.form.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:bg-white/15 transition-all placeholder-white/50 border border-white/20"
              placeholder={t('contact.form.phone.placeholder')}
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-white mb-2 font-medium">
            {t('contact.form.message')} <span className="text-brand-teal">{t('common.required')}</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white/10 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 focus:bg-white/15 transition-all resize-none placeholder-white/50 border border-white/20"
            placeholder={t('contact.form.message.placeholder')}
            disabled={isSubmitting}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting || submitStatus === 'success'}
          className={`w-full font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            submitStatus === 'success'
              ? 'bg-green-600 text-white cursor-default'
              : isSubmitting 
                ? 'bg-brand-teal/50 text-white cursor-not-allowed' 
                : 'bg-brand-teal hover:bg-brand-teal/90 text-white hover:shadow-lg transform hover:scale-[1.02]'
          }`}
        >
          {submitStatus === 'success' ? (
            <>
              <CheckCircle className="w-5 h-5" />
              {t('contact.form.sent')}
            </>
          ) : isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              {t('contact.form.sending')}
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              {t('contact.form.send')}
            </>
          )}
        </button>

        {submitStatus === 'success' && (
          <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
            <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <p className="text-green-400 font-medium">{t('contact.form.success')}</p>
            <p className="text-green-300 text-sm mt-1">{t('contact.form.success.desc')}</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-center">
            <AlertCircle className="w-6 h-6 text-red-400 mx-auto mb-2" />
            <p className="text-red-400 font-medium">{t('contact.form.error')}</p>
            <p className="text-red-300 text-sm mt-1">{t('contact.form.error.desc')}</p>
          </div>
        )}
      </form>
      
      <div className="mt-6 pt-6 border-t border-white/20 text-center">
        <p className="text-white/60 text-xs">
          {t('contact.form.direct')}
        </p>
        <a 
          href={`tel:${t('common.phone')}`}
          className="text-brand-teal hover:text-white transition-colors font-semibold text-lg mt-1 block"
        >
          {t('common.phone')}
        </a>
      </div>
    </div>
  );
};

export default ContactForm;