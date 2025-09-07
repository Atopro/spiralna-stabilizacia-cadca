import React from 'react';
import Section from '../ui/Section';
import ExerciseCard from './ExerciseCard';
import { SpiralWave } from '../ui/decorative/SpiralWave';
import { exercises } from '../../data/exercises';

const ExercisesSection = () => {
  return (
    <Section
      id="exercises"
      title="Ukážky cvičení"
      subtitle="Objavte účinné cvičenia spirálnej stabilizácie"
      className="relative overflow-hidden"
    >
      <SpiralWave className="absolute left-0 top-0 text-primary-50" />
      <SpiralWave className="absolute bottom-0 right-0 rotate-180 text-primary-50" />
      
      <div className="relative grid gap-8 md:grid-cols-2">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.title}
            {...exercise}
          />
        ))}
      </div>
    </Section>
  );
};

export default ExercisesSection;