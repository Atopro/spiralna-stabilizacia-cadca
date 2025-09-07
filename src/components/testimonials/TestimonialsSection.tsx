import React from 'react';
import Section from '../ui/Section';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

const TestimonialsSection = () => {
  return (
    <Section
      id="testimonials"
      title="Referencie"
      subtitle="Čo hovoria naši klienti"
      background="gray"
    >
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </Section>
  );
};

export default TestimonialsSection;