import React from 'react';

interface FeatureCardProps {
  iconUrl: string;
  iconAlt: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconUrl,
  iconAlt,
  title,
  description,
}) => {
  return (
    <div
      className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8 shadow-md hover:bg-white/10 hover:shadow-lg transition-all duration-300 ease-out transform hover:-translate-y-1"
    >
      <div
        className="mb-5 inline-flex shrink-0 items-center justify-center rounded-2xl
                   h-16 w-16 md:h-[72px] md:w-[72px]
                   bg-white/10 backdrop-blur-sm ring-1 ring-white/25
                   shadow-[0_8px_20px_-6px_rgba(0,0,0,0.35)]"
        aria-hidden="true"
      >
        <img
          src={iconUrl}
          alt={iconAlt}
          width="48"
          height="48"
          className="h-10 w-10 md:h-12 md:w-12 object-contain
                     brightness-125 contrast-125 saturate-125
                     drop-shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-white/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;