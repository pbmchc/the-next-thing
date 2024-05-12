import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        shaking: 'shake 0.5s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        shake: {
          '0%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '10%': { transform: 'translate(-1px, -1px) rotate(-1deg)' },
          '20%': { transform: 'translate(-1px, 0px) rotate(1deg)' },
          '30%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '40%': { transform: 'translate(1px, -1px) rotate(1deg)' },
          '50%': { transform: 'translate(-1px, 1px) rotate(-1deg)' },
          '60%': { transform: 'translate(-1px, 1px) rotate(0deg)' },
          '70%': { transform: 'translate(1px, 1px) rotate(-1deg)' },
          '80%': { transform: 'translate(-1px, -1px) rotate(1deg)' },
          '90%': { transform: 'translate(1px, 1px) rotate(0deg)' },
          '100%': { transform: 'translate(1px, -1px) rotate(-1deg)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
