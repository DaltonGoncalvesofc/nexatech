import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#0F172A',
        brand: '#DC2626',
        surface: '#F8FAFC'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(0, 0, 0, 0.12)',
        soft: '0 20px 60px rgba(15, 23, 42, 0.08)'
      },
      borderRadius: {
        xl: '1.5rem'
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
