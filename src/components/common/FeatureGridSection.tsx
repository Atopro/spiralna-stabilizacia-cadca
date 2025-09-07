import React from 'react';

export interface Feature {
  iconUrl: string;
  iconAlt: string;
  title: string;
  description: string;
}

interface FeatureGridSectionProps {
  title: string;
  features: Feature[];
  className?: string;
}

export const FeatureGridSection: React.FC<FeatureGridSectionProps> = ({
  title,
  features,
  className = ''
}) => {
  return (
    <section className={`relative isolate ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-16">
          {title}
        </h2>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center rounded-2xl bg-white/8 backdrop-blur-md ring-1 ring-white/15 p-6 transition hover:bg-white/12 hover:shadow-lg min-h-[220px]"
            >
              <div className="mb-5 mx-auto grid place-items-center h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-white/10 shadow-sm">
                <img
                  src={feature.iconUrl}
                  alt={feature.iconAlt}
                  width="48"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-12 md:h-14 md:w-14 object-contain select-none pointer-events-none filter brightness-110 contrast-125 saturate-125 drop-shadow-sm"
                  aria-hidden="true"
                />
              </div>
              <h3 className="text-center text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-center text-white/80 text-sm md:text-[15px] leading-relaxed [text-wrap:balance] max-w-[34ch]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGridSection;