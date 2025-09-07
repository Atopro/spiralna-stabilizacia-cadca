import React from 'react';

interface GlowProps {
  color?: 'teal' | 'mint' | 'navy';
  className?: string;
  children: React.ReactNode;
}

const Glow: React.FC<GlowProps> = ({ 
  color = 'teal', 
  className = '', 
  children 
}) => {
  const glowColors = {
    teal: 'shadow-[0_0_15px_rgba(29,185,154,0.5)]',
    mint: 'shadow-[0_0_15px_rgba(168,240,218,0.5)]',
    navy: 'shadow-[0_0_15px_rgba(10,37,64,0.5)]'
  };

  return (
    <div className={`${glowColors[color]} ${className}`}>
      {children}
    </div>
  );
};

export default Glow;