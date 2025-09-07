import React from 'react';

interface WavePatternProps {
  className?: string;
}

export const WavePattern: React.FC<WavePatternProps> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute inset-0 opacity-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-[50vh] w-[100vw] animate-wave"
            style={{
              top: `${i * 20}%`,
              left: '0',
              animationDelay: `${i * 0.5}s`,
              background: `linear-gradient(90deg, transparent, currentColor, transparent)`,
              transform: 'rotate(-3deg)',
            }}
          />
        ))}
      </div>
    </div>
  );
};