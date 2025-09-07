import React from 'react';

interface SpiralWaveProps {
  className?: string;
}

export const SpiralWave: React.FC<SpiralWaveProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      className={`h-64 w-64 opacity-50 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200,200 C250,150 300,200 300,250 C300,300 250,350 200,350 C150,350 100,300 100,250 C100,200 150,150 200,150"
        fill="currentColor"
        strokeWidth="2"
        stroke="currentColor"
        className="animate-[spin_20s_linear_infinite]"
      />
    </svg>
  );
};