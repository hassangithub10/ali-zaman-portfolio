/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'dark-bg': '#222222',
                'orange-accent': '#FF6B35',
                'yellow-accent': '#FFD23F',
                'dark-card': '#333333',
                'dark-border': '#444444'
            },
            fontFamily: {
                'display': ['Chakra Petch', 'sans-serif'],
                'body': ['Inter', 'sans-serif'],
            },
            animation: {
                'slide-in-left': 'slideInLeft 0.6s ease-out',
                'slide-in-right': 'slideInRight 0.6s ease-out',
                'float': 'float 6s ease-in-out infinite',
            }
        },
    },
    plugins: [],
}