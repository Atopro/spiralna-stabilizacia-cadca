import React from 'react';
import { LucideIcon } from 'lucide-react';
import { useInView } from '../../../hooks/useInView';
import { iconAnimations } from './iconAnimations';

interface AnimatedIconProps {
  icon: LucideIcon;
  variant: keyof typeof iconAnimations;
  className?: string;
}

const AnimatedIcon: React.FC<AnimatedIconProps> = ({ icon: Icon, variant, className = '' }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const animation = iconAnimations[variant];

  return (
    <div ref={ref} className={`transition-all duration-500 ${inView ? animation : 'opacity-0'} ${className}`}>
      <Icon className="w-6 h-6" />
    </div>
  );
};

export default AnimatedIcon;