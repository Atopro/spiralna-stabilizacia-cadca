import React from 'react';
import { ArrowRight } from 'lucide-react';
import type { Exercise } from '../../types/common';

const ExerciseCard: React.FC<Exercise> = ({
  title,
  description,
  imageUrl,
  benefits
}) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
      <div className="aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
        <ul className="mt-4 space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center text-gray-600">
              <ArrowRight className="mr-2 h-4 w-4 text-primary-500" />
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="absolute -right-12 -top-12 h-24 w-24 rounded-full bg-primary-500/10" />
      <div className="absolute -bottom-12 -left-12 h-24 w-24 rounded-full bg-primary-500/10" />
    </div>
  );
};

export default ExerciseCard;