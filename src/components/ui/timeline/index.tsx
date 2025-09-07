import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  title: string;
  subtitle?: string;
  content: React.ReactNode;
  image?: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative w-full">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-brand-teal/20 transform md:-translate-x-1/2" />
      
      {items.map((item, index) => (
        <div
          key={index}
          className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-12 md:mb-8"
        >
          {/* Content */}
          <div className="ml-12 md:ml-0 md:w-[45%] md:pr-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-brand-navy mb-2">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-brand-teal mb-4 font-medium">{item.subtitle}</p>
              )}
              <div className="text-gray-600 text-sm md:text-base">
                {item.content}
              </div>
            </motion.div>
          </div>

          {/* Center Point */}
          <div className="absolute left-4 md:left-1/2 top-0 md:top-1/2 transform md:-translate-y-1/2 md:-translate-x-1/2">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`w-4 h-4 rounded-full shadow-lg ${
                ['Skolióza', 'Hernia disku'].includes(item.title)
                  ? 'bg-brand-teal scale-125'
                  : 'bg-brand-teal/70'
              }`}
            />
          </div>

          {/* Image */}
          {item.image && (
            <div className="mt-6 ml-12 md:ml-0 md:mt-0 md:w-[45%] md:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};