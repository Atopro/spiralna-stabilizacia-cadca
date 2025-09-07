import React from 'react';
import { Clock } from 'lucide-react';
import Button from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  duration: string;
  benefits: string[];
  image: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  duration,
  benefits,
  image
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col min-h-[700px]">
      {/* Image Container */}
      <div className="relative w-full h-[400px]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50" />
      </div>

      {/* Content */}
      <div className="flex-grow p-8">
        <h3 className="text-2xl font-bold text-brand-navy mb-2">{title}</h3>
        <p className="text-brand-navy/80 mb-4">{description}</p>

        {/* Duration */}
        <div className="flex items-center text-brand-navy/70 mb-6">
          <Clock className="w-4 h-4 mr-2" />
          <span>Trvanie: {duration}</span>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center text-brand-navy/80">
              <div className="mr-2 h-1.5 w-1.5 rounded-full bg-brand-teal" />
              {benefit}
            </div>
          ))}
        </div>
      </div>

      {/* Action Button */}
      <div className="p-8 pt-0">
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-brand-navy">Objednať sa:</span>
          <a 
            href="tel:+421948525380" 
            className="text-2xl font-semibold text-brand-navy hover:text-brand-teal transition-colors"
          >
            +421 948 525 380
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
      <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
    </div>
  );
}

export default ServiceCard;