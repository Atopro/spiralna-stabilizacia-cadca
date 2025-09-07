import React from 'react';
import { Phone, Mail } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    title: 'Telefón',
    content: '+421 948 525 380'
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@spiralnastabilizaciacadca.com'
  }
];

const ContactInfo = () => {
  return (
    <div className="space-y-8">
      {contactItems.map((item) => (
        <div key={item.title} className="flex items-start space-x-4 group">
          <div className="p-2 rounded-lg bg-brand-teal/10 group-hover:bg-brand-teal/20 transition-colors">
            <item.icon className="h-6 w-6 text-brand-teal" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{h3.title}</h3>
            <p className="mt-1 text-white/80">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;