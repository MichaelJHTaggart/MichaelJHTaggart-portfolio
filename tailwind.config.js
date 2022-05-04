module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%': { transform: 'rotate(0.0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10.0deg)' },
          '60%': { transform: 'rotate(0.0deg)' },
          '100%': { transform: 'rotate(0.0deg)' },
        },
        turn: {
          '0%': {
            transform: 'rotate(90deg)',
            opacity: '0%',
          },
          '100%': { transform: 'rotate(0deg)', opacity: '100%' },
        },
        turnOff: {
          '0%': { transform: 'rotate(-90deg)', opacity: '0%' },
          '100%': { transform: 'rotate(0deg)', opacity: '100%' },
        },
      },
      animation: {
        'waving-hand': 'wave 2s linear',
        'turn-90': 'turn 0.75s',
        'turn-0': 'turnOff 0.75s',
      },
      transitionProperty: {},
    },
  },
  plugins: [],
};
