module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            animation: {
                "ping-slow": "ping 3s cubic-bezier(0, 0, 0.2, 1) infinite",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
