import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Dark base — preto profundo (não 100% preto, mais elegante)
        ink: {
          DEFAULT: '#0A0A0B',
          50: '#F7F7F7',
          100: '#E5E5E5',
          200: '#C9C9CB',
          300: '#9B9BA0',
          400: '#6C6C72',
          500: '#3D3D44',
          600: '#1E1E22',
          700: '#141416',
          800: '#0E0E10',
          900: '#0A0A0B',
        },
        // Acentos quentes — caramelo + dourado
        // (variável `neon` mantida por compatibilidade, mas agora é um marrom claro)
        gold:  '#C9A455',
        neon:  '#D4A574',   // caramelo (substitui o azul neon antigo)
        warm:  '#D4A574',   // alias semântico
        cocoa: '#2D1F15',   // marrom-cacau escuro (para fundos)
      },
      fontFamily: {
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter:  '-0.03em',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
