import React from 'react';
import { LucideCrop as LucideProps } from 'lucide-react';

export const SpineIcon: React.FC<LucideProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Vertebrae */}
    <path d="M12 4a2 2 0 100-4 2 2 0 000 4zM12 14a2 2 0 100-4 2 2 0 000 4zM12 24a2 2 0 100-4 2 2 0 000 4z" />
    
    {/* Connecting lines */}
    <path d="M12 4v6M12 14v6" />
    
    {/* Nerve branches */}
    <path d="M14 2h4M6 2h4M14 12h4M6 12h4M14 22h4M6 22h4" />
    
    {/* Spinal curves */}
    <path d="M12 4c2 2 -2 4 0 6" />
    <path d="M12 14c-2 2 2 4 0 6" />
  </svg>
);

export default SpineIcon;