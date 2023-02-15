/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                shake: 'shake 0.9s ease-in-out 0s infinite',
                fontColor: 'fontColor 2s ease 0s infinite alternate',
                float: 'float 1.4s cubic-bezier(0.61, 0.6, 0.52, 0.56) 0s infinite alternate',
            },
            keyframes: {
                shake: {
                    '0%': { transform: 'translateX(-2px)' },
                    '10%': { transform: 'translateX(2px)' },
                    '20%': { transform: 'translateX(-2px)' },
                    '30%': { transform: 'translateX(2px)' },
                    '40%': { transform: 'translateX(-2px)' },
                    '50%': { transform: 'translateX(-2px)' },
                    '60%': { transform: 'translateX(2px)' },
                    '70%': { transform: 'translateX(-2px)' },
                    '80%': { transform: 'translateX(2px)' },
                    '90%': { transform: 'translateX(-2px)' },
                    '100%': { transform: 'translateX(2px)' },
                },
                fontColor: {
                    '0%': { color: '', opacity: 1 },
                    '100%': { color: '', opacity: 1 },
                },
                float: {
                    '0%': { transform: 'translateY(1px)' },
                    '20%': { transform: 'translateY(2px)' },
                    '40%': { transform: 'translateY(3px)' },
                    '60%': { transform: 'translateY(4px)' },
                    '80%': { transform: 'translateY(5px)' },
                    '100%': { transform: 'translateY(6px)' },
                },
            },
        },
    },

    plugins: [require('@tailwindcss/forms')],
}
