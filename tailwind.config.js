/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0E3C61',
          aqua: '#00C6A7',
          mint: '#9BE15D',
          light: '#F8FAFC',
          slate: '#334155',
        }
      },
      gradientColorStops: {
        'brand-navy': '#0E3C61',
        'brand-aqua': '#00C6A7'
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'benefit': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'benefit-hover': '0 12px 32px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};