import React, { useEffect, useRef } from 'react';

interface DNASpiralProps {
  side: 'left' | 'right';
  className?: string;
}

export const DNASpiral: React.FC<DNASpiralProps> = ({ side, className = '' }) => {
  const spiralRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!spiralRef.current) return;
      const scrollY = window.scrollY;
      const rotation = scrollY * 0.1; // Adjust this value to control rotation speed
      spiralRef.current.style.transform = `${side === 'right' ? 'scale(-1, 1)' : ''} rotate(${side === 'right' ? -rotation : rotation}deg)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [side]);

  return (
    <div className={`fixed ${side}-0 top-0 h-screen pointer-events-none ${className}`}>
      <svg
        ref={spiralRef}
        width="240"
        height="800"
        viewBox="0 0 240 800"
        className="transition-transform duration-300"
        style={{ transformOrigin: 'center center' }}
      >
        {/* Main spiral strands */}
        <path
          className="fill-primary-100/30"
          d={`
            M120,0 
            C180,100 60,200 120,300 
            C180,400 60,500 120,600
            C180,700 60,800 120,800
          `}
        />
        <path
          className="fill-primary-200/30"
          d={`
            M120,0 
            C60,100 180,200 120,300
            C60,400 180,500 120,600
            C60,700 180,800 120,800
          `}
        />
        
        {/* Connection points */}
        {[...Array(16)].map((_, i) => (
          <circle
            key={i}
            className="fill-primary-600/50"
            cx="120"
            cy={i * 50}
            r="8"
          />
        ))}
        
        {/* Additional decorative elements */}
        <path
          className="stroke-primary-300/20"
          fill="none"
          strokeWidth="2"
          d="M0,0 C240,200 0,400 240,600 C0,800 240,1000 0,1200"
        />
      </svg>
    </div>
  );
};