/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#050b1c',
          900: '#0a1128',
          800: '#101c3f',
          700: '#16244f',
        },
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(36px, -42px) scale(1.12)' },
          '66%': { transform: 'translate(-24px, 24px) scale(0.88)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'none' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(34,211,238,0.55)' },
          '80%, 100%': { boxShadow: '0 0 0 16px rgba(34,211,238,0)' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        blob: 'blob 12s ease-in-out infinite',
        'fade-up': 'fade-up .6s ease both',
        'gradient-x': 'gradient-x 4s ease infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        marquee: 'marquee 26s linear infinite',
      },
    },
  },
  plugins: [],
}