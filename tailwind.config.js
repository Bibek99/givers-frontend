const colors = require('tailwindcss/colors');

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {
            inset: {
                73: '18.25rem',
            },
            blur: {
                xs: '2px',
              },
            colors: {
                fuchsia: colors.fuchsia,
                orange: colors.orange,
            },
            animation: {
                blob: 'blob 7s linear infinite',
                blob2: 'blob2 4s linear infinite',
            },
            keyframes: {
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
                blob2: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(10px, -30px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(0px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                },
            },
            width: {
                112: '28rem',
                128: '32rem',
                144: '36rem',
                176: '44rem',
                192: '48rem',
            },
        },
    },
    variants: {
        extend: {
            opacity: ['disabled'],
            backgroundColor: ['disabled'],
            cursor: ['disabled'],
            blur: ['hover'],
            brightness: ['hover'],
            display: ['hover'],
            ringWidth: ['hover', 'active'],
        },
    },
    plugins: [],
};
