import React from 'react';

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  subtitle,
  children,
  className = ''
}) => {
  return (
    <section 
      id={id}
      className={`pt-32 pb-20 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-[0px_4px_8px_rgba(0,0,0,0.2)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-xl text-[#3A506B] font-normal italic max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;