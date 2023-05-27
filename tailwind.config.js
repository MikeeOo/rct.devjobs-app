/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Kumbh Sans", "sans-serif"],
                mono: ["Space Mono", "monospace"],
            },
        },
    },
    plugins: ["flowbite/plugin"],
};
