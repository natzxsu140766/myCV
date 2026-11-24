/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071B3A',
          900: '#0B2348',
        },
        royal: '#2457D6',
        gold: '#FFD43B',
        ice: '#EAF1FF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'hero-radial':
          'radial-gradient(1200px 600px at 50% -10%, rgba(36, 87, 214, 0.35), transparent 60%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(6deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.9' },
        },
        scrollhint: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '70%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float-slow 11s ease-in-out infinite',
        twinkle: 'twinkle 3.5s ease-in-out infinite',
        scrollhint: 'scrollhint 1.8s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 212, 59, 0.35)',
        'glow-sm': '0 0 18px rgba(255, 212, 59, 0.3)',
        card: '0 20px 50px -20px rgba(7, 27, 58, 0.45)',
      },
    },
  },
  plugins: [],
};
