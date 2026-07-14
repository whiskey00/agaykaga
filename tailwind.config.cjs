/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        bg:  '#ffffff',

        // bryl-minimal remaps for legacy names — everything monochrome now
        'cocoa':  '#0a0a0a',
        'merlot': '#262626',
        'mauve':  '#737373',
        'peony':  '#f5f5f5',
        'petal':  '#fafafa',
        'almond': '#fafafa',
      },
      fontFamily: {
        'sans':    ['Geist', 'system-ui', 'sans-serif'],
        'serif':   ['Source Serif 4', 'Georgia', 'serif'],
        'mono':    ['Geist Mono', 'ui-monospace', 'monospace'],
        'cursive': ['Geist Mono', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        'lg':  '12px',
        'xl':  '12px',
        '2xl': '16px',
        '3xl': '16px',
      },
      boxShadow: {
        'lg':  '0 8px 22px -14px rgba(0,0,0,0.25)',
        'xl':  '0 18px 36px -20px rgba(0,0,0,0.40)',
        '2xl': '0 40px 90px -20px rgba(0,0,0,0.35)',
      },
      keyframes: {
        'slide-in-right': {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'slide-in-left': {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-in-right': 'slide-in-right 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-left':  'slide-in-left  700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up':        'fade-up 700ms cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}
