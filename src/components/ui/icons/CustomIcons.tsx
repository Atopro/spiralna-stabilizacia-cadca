import React from 'react';
import { LucideCrop as LucideProps } from 'lucide-react';

export const CustomSpine: React.FC<LucideProps> = (props) => (
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
    <path d="M12 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    <path d="M12 9c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    <path d="M12 15c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" />
    
    {/* Spinal cord */}
    <path d="M12 5v4" />
    <path d="M12 11v4" />
    <path d="M12 17v4" />
    
    {/* Nerve branches */}
    <path d="M14 5h3" />
    <path d="M7 5h3" />
    <path d="M14 11h3" />
    <path d="M7 11h3" />
    <path d="M14 17h3" />
    <path d="M7 17h3" />
    
    {/* Curvature indication */}
    <path d="M12 2v1" strokeDasharray="2 2" />
    <path d="M12 21v1" strokeDasharray="2 2" />
  </svg>
);