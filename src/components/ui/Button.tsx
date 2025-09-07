import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'font-semibold transition-all duration-300 rounded-lg transform hover:scale-[1.02] active:scale-[0.98]';
  
  const variants = {
    primary: 'bg-[#0A2540] hover:bg-[#0A2540]/90 text-white shadow-lg hover:shadow-xl hover:glow-navy',
    secondary: 'bg-[#0A2540] hover:bg-[#0A2540]/90 text-white shadow-lg hover:shadow-xl hover:glow-navy'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2.5',
    lg: 'px-8 py-3 text-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;