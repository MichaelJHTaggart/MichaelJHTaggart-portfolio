module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)'},
          '30%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        turn: {
          '0%': {
            transform: 'rotate(30deg)',
            opacity: '0%',
          },
          '100%': { transform: 'rotate(0deg)', opacity: '100%' },
        },
        turnOff: {
          '0%': { transform: 'rotate(-90deg)', opacity: '0%' },
          '100%': { transform: 'rotate(0deg)', opacity: '100%' },
        },
        slideInLeft: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideOutLeft: {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          '100%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
        },
      },
      animation: {
        'waving-hand': 'wave 0.3s linear',
        'turn-90': 'turn 0.75s',
        'turn-0': 'turnOff 0.75s',
        'slide-in-left': 'slideInLeft 0.75s',
        'slide-out-left': 'slideOutLeft 0.75s forwards',
      },
      transitionProperty: {},
    },
  },
  plugins: [],
};
