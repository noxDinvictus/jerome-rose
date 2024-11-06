import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xl: { max: '1279px' },
      lg: { max: '1023px' },
      md: { max: '767px' },
      sm: { max: '639px' },
    },
    extend: {
      colors: {
        bride: {
          100: '#f0c9ba',
          200: '#d8b5a7',
          300: '#c0a195',
          400: '#a88d82',
          500: '#907970',
          600: '#78655d',
          700: '#60504a',
          800: '#483c38',
          900: '#302825',
        },
        groom: {
          100: '#353d64',
          200: '#30375a',
          300: '#2a3150',
          400: '#252b46',
          500: '#1b1f32',
          600: '#151828',
          700: '#10121e',
          800: '#0b0c14',
          900: '#05060a',
        },
      },
      fontFamily: {
        pw: ['var(--font-pw)'],
        allura: ['var(--font-allura)'],
      },
    },
  },
  plugins: [],
};
export default config;
