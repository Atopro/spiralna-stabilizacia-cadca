import React from 'react';
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { Diagnosis } from '../../data/diagnoses';
import DiagnosisCard from './DiagnosisCard';

interface DiagnosisGridProps {
  diagnoses: Diagnosis[];
}

const DiagnosisGrid: React.FC<DiagnosisGridProps> = ({ diagnoses }) => {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [isAnimating, setIsAnimating] = React.useState(false);

  const toggleExpand = (id: string) => {
    setIsAnimating(true);
    setExpandedId(expandedId === id ? null : id);
    
    // Smooth scroll to expanded content
    if (expandedId !== id) {
      setTimeout(() => {
        const element = document.getElementById(`diagnosis-${id}`);
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="space-y-12">
      {/* Grid of compact cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {diagnoses.map((diagnosis) => (
          <button
            key={diagnosis.id}
            onClick={() => toggleExpand(diagnosis.id)}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 ${
              expandedId === diagnosis.id
                ? 'bg-gradient-to-br from-brand-teal to-brand-teal/90 text-white shadow-xl scale-[1.02]'
                : 'bg-gradient-to-br from-white to-white/90 hover:shadow-lg'
            }`}
          >
            {/* Card Content */}
            <div className="relative z-10 p-8">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className={`text-2xl font-bold ${
                  expandedId === diagnosis.id ? 'text-white' : 'text-brand-navy'
                }`}>
                  {diagnosis.title}
                </h3>
                <div className={`rounded-full p-2 transition-colors ${
                  expandedId === diagnosis.id 
                    ? 'bg-white/10' 
                    : 'bg-brand-teal/10'
                }`}>
                  {expandedId === diagnosis.id ? (
                    <ChevronUp className="w-5 h-5 text-white" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-brand-teal" />
                  )}
                </div>
              </div>
              
              <p className={`text-lg mb-4 ${
                expandedId === diagnosis.id ? 'text-white/90' : 'text-brand-teal'
              }`}>
                {diagnosis.subtitle}
              </p>
              
              <p className={`line-clamp-3 mb-6 ${
                expandedId === diagnosis.id ? 'text-white/80' : 'text-gray-600'
              }`}>
                {diagnosis.description}
              </p>

              <div className={`flex items-center gap-2 text-sm font-medium ${
                expandedId === diagnosis.id 
                  ? 'text-white/90' 
                  : 'text-brand-teal'
              }`}>
                <span>Zobraziť viac</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-teal/10 to-transparent transition-transform duration-500 group-hover:scale-150" />
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-teal/10 to-transparent transition-transform duration-500 group-hover:scale-150" />
          </button>
        ))}
      </div>

      {/* Expanded content */}
      {expandedId && (
        <div 
          id={`diagnosis-${expandedId}`}
          className="relative -mx-4 md:mx-0"
        >
          <div className={`transition-all duration-300 ${
            isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}>
            <DiagnosisCard 
              {...diagnoses.find(d => d.id === expandedId)!}
              onClose={() => toggleExpand(expandedId)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisGrid;