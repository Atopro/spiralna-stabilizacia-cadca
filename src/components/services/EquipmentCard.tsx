import React from 'react';

interface EquipmentCardProps {
  title: string;
  description: string;
  image: string;
}

const EquipmentCard: React.FC<EquipmentCardProps> = ({
  title,
  description,
  image
}) => {
  return (
    <div className="space-y-2">
      <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/90 to-white/70 p-6 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
        {/* Image Container */}
        <div className="mb-4 h-[300px] overflow-hidden rounded-xl bg-brand-teal/5 flex items-center justify-center">
          <div className="relative w-full h-full p-4">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-grow flex flex-col">
          <h3 className="text-xl font-bold text-brand-navy mb-2">{title}</h3>
          <p className="text-brand-navy/80 text-sm">{description}</p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
        <div className="absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-brand-teal/5 transition-transform duration-300 group-hover:scale-150" />
      </div>
      
      {title === 'Oporná tyč' && (
        <p className="text-xs text-gray-500 text-right px-2">zdroj: spiralstabilization.com</p>
      )}
    </div>
  );
};

export default EquipmentCard;