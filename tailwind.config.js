/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                'Rubik': ['Rubik', 'sans-serif'],
                'Nunito': ['Nunito', 'sans-serif'],
            },
            animation: {
                'shake': 'shake 1s ease-in-out infinite alternate',
                'bob': 'bob 3s ease-in-out infinite',
                'spin': 'spin 0.5s ease-in-out alternate',
                'fade': 'fade 0.8s cubic-bezier( 0.175, 0.885, 0.32, 1.5 ) forwards',
            },
            keyframes: {
                shake: {
                    '50%': { transform: 'rotateZ( -10deg )' },
                    '100%': { transform: 'rotateZ( 10deg )' },
                },
                bob: {
                    '0%': { transform: 'translateY( -2rem )' },
                    '30%': { transform: 'translateY( 2rem )' },
                    '60%': { transform: 'translateY( -2.5rem )' },
                    '80%': { transform: 'translateY( -2rem )' },
                    '100%': { transform: 'translateY( -2rem )' },
                },
                spin: {
                    '0%': { transform: 'rotateY( 0deg )' },
                    '50%': { transform: 'rotateY( 90deg )' },
                    '100%': { transform: 'rotateY( 0deg )' },
                },
                fade: {
                    '0%': { transform: 'translateY( 125% )', opacity: '0' },
                    '100%': { transform: 'translateY( 0 )', opacity: '100%' },
                },
            },
        },
    },
    plugins: [
        require("tailwindcss-animation-delay"),
    ],
}

