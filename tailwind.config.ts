import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mono: {
          white: '#ffffff',
          gray: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 20s ease infinite',
        'orb-float': 'orbFloat 15s ease-in-out infinite',
        'logo-glow': 'logoGlow 3s ease-in-out infinite',
        'logo-rotate': 'logoRotate 8s linear infinite',
        'fade-in-up': 'fadeInUp 1s ease-out',
        'slide-down': 'slideDown 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'arrow-pulse': 'arrowPulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(50px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-30px, 30px) scale(0.95)' },
        },
        logoGlow: {
          '0%, 100%': {
            boxShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 60px rgba(255, 255, 255, 0.2), inset 0 0 20px rgba(255, 255, 255, 0.3)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.6), 0 0 80px rgba(255, 255, 255, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.5)',
            transform: 'scale(1.1)',
          },
        },
        logoRotate: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { transform: 'translateY(-100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 10px 40px rgba(255, 255, 255, 0.15)' },
          '50%': { boxShadow: '0 15px 60px rgba(255, 255, 255, 0.25)' },
        },
        arrowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'translateX(0)' },
          '50%': { opacity: '1', transform: 'translateX(15px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

export default config
