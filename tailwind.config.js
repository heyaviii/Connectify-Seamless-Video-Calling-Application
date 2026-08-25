/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f2ff',
          200: '#bce9ff',
          300: '#8edcff',
          400: '#59c7ff',
          500: '#33abff',
          600: '#1a8df5',
          700: '#1474e1',
          800: '#175db6',
          900: '#19508f',
          950: '#143157',
        },
        surface: {
          50: '#f7f8fc',
          100: '#eef0f8',
          200: '#d9ddf0',
          300: '#b8bfe3',
          800: '#1a1d2e',
          900: '#111220',
          950: '#080910',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(51, 171, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(51, 171, 255, 0.7)' },
        }
      }
    },
  },
  plugins: [],
}
