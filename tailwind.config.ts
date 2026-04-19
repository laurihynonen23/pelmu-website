import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F3EA',
        ink: '#1C1916',
        ember: '#C4622D',
        dust: '#EAE3D6',
        stone: '#8C8279',
        dark: '#0F0E0C',
        'ember-hover': '#A84E22',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '80': ['5rem', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        '56': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '40': ['2.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '32': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        '24': ['1.5rem', { lineHeight: '1.3' }],
        '20': ['1.25rem', { lineHeight: '1.4' }],
        '18': ['1.125rem', { lineHeight: '1.5' }],
        '16': ['1rem', { lineHeight: '1.6' }],
        '14': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '128': '8rem',
        '160': '10rem',
        '96': '6rem',
        '88': '5.5rem',
        '64': '4rem',
        '56': '3.5rem',
        '48': '3rem',
        '40': '2.5rem',
        '32': '2rem',
        '28': '1.75rem',
        '24': '1.5rem',
      },
      borderRadius: {
        '32': '2rem',
        '24': '1.5rem',
        '16': '1rem',
      },
      transitionDuration: {
        '600': '600ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
