import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
  inView: boolean;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  icon: Icon,
  title,
  description,
  delay,
  inView
}) => {
  return (
    <div
      className={`group relative bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-sm transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className="mb-2">
          <Icon className="h-5 w-5 text-brand-navy" strokeWidth={1.5} />
        </div>
        <h3 className="text-sm font-semibold text-brand-navy">
          {title}
        </h3>
        <p className="text-xs text-brand-navy/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;