/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'berkeley': '#1C2A39', // Industrial navy/steel blue (primary)
                'picton': '#00B1F1ff',   // Industrial orange accent (safety & energy)
                'white': '#FDFDFD',    // Off-white for contrast
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: 'var(--primary)',
                secondary: 'var(--secondary)',
                gray: {
                    50: '#FAFAFA',
                    100: '#F4F5F7',
                    200: '#E4E7EB',
                    300: '#CBD2D9',
                    400: '#9AA5B1',
                    500: '#7B8794',
                    600: '#616E7C',
                    700: '#52606D',
                    800: '#3E4C59',
                    900: '#1F2933', // Dark steel gray
                }
            },
            fontFamily: {
                montserrat: ['var(--font-montserrat)'],
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-in-out',
                'slide-up': 'slideUp 0.8s ease-out',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(242, 159, 5, 0.3)' },
                    '100%': { boxShadow: '0 0 30px rgba(242, 159, 5, 0.6)' },
                },
            },
        },
    },
    plugins: [],
};
