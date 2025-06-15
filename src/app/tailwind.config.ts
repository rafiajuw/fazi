import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'evento-blue': '#1E3A8A', // Matches evento.com.pk's blue
      },
    },
  },
  plugins: [],
};

export default config;