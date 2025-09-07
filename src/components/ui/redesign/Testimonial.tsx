import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatar?: string;
  className?: string;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  avatar,
  className = ''
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">
          <Quote className="w-8 h-8 text-[#00C6A7]" />
        </div>
        <div>
          <blockquote className="text-[#334155] mb-4 italic">
            "{quote}"
          </blockquote>
          <div className="flex items-center gap-3">
            {avatar && (
              <img
                src={avatar}
                alt={author}
                className="w-10 h-10 rounded-full object-cover"
                loading="lazy"
                decoding="async"
                width="40"
                height="40"
              />
            )}
            <div>
              <div className="font-semibold text-[#0E3C61]">{author}</div>
              {role && (
                <div className="text-sm text-[#334155]">{role}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;