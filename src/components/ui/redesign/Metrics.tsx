import React from 'react';

interface Metric {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

interface MetricsProps {
  metrics: Metric[];
  className?: string;
}

export const Metrics: React.FC<MetricsProps> = ({ metrics, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto ${className}`}>
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl"
        >
          {metric.icon && (
            <div className="flex justify-center mb-2 text-[#9BE15D]">
              {metric.icon}
            </div>
          )}
          <div className="text-2xl font-bold text-white mb-1">
            {metric.value}
          </div>
          <div className="text-sm text-white/80">
            {metric.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Metrics;