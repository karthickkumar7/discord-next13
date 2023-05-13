/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                burple: '#5865F2',
                blackishGray: '#1e1f22',
                darkgray: '#2b2d31',
                Gray: '#303339',
                green: '#287e29',
            },
        },
    },
    plugins: [],
};
