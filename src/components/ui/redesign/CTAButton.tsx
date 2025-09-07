import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'phone';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
}

export const CTAButton: React.FC<CTAButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  href,
  className = '',
  disabled = false
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'btn-primary',
    secondary: 'bg-white text-[#0E3C61] border-2 border-[#00C6A7] hover:bg-[#00C6A7] hover:text-white focus-visible:ring-[#00C6A7]/50',
    whatsapp: 'bg-green-500 text-white hover:bg-green-600 focus-visible:ring-green-500/50',
    phone: 'bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-500/50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-xl',
    md: 'px-5 py-3 text-base rounded-2xl',
    lg: 'px-8 py-4 text-lg rounded-2xl'
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = (
    <>
      {variant === 'whatsapp' && <MessageCircle className="w-5 h-5 mr-2" />}
      {variant === 'phone' && <Phone className="w-5 h-5 mr-2" />}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  );
};

export default CTAButton;