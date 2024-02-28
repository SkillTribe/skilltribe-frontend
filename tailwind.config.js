/** @type {import('tailwindcss').Config} */

function myPlugin({ addUtilities }) {
    const newUtilities = {
        ".test": {
            backgroundColor: "red",
            textColors: "black",
        },
        ".center": {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
    };
    addUtilities(newUtilities, ["responsive", "hover"]);
}

module.exports = {
    plugins: [require("tailwindcss-animate"), myPlugin],
    darkMode: ["class"],
    content: [
        "./pages/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
        "./app/**/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}",
    ],
    prefix: "",
    theme: {
        fontFamily: {
            sans: ["Roboto"],
            roboto: ["Roboto", "sans-serif"],
        },
        screens: {
            sm: "480px",
            md: "768px",
            lg: "976px",
            xl: "1440px",
        },
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                primary: "rgba(244, 237, 219, 1)",
                "primary-0.5": "rgba(244, 237, 219, 0.5)",
                "primary-0.3": "rgba(244, 237, 219, 0.3)",
                "primary-0.1": "rgba(244, 237, 219, 0.1)",
                secondary: "rgba(75, 87, 97, 1)",
                "secondary-0.8": "rgba(75, 87, 97, 0.8)",
                "secondary-0.5": "rgba(75, 87, 97, 0.5)",
                "secondary-0.3": "rgba(75, 87, 97, 0.3)",
                "secondary-0.1": "rgba(75, 87, 97, 0.1)",
                "black-0.5": "rgba(0, 0, 0, 0.50)",
                "black-0.3": "rgba(0, 0, 0, 0.30)",
                "black-0.1": "rgba(0, 0, 0, 0.10)",
            },
            backgroundColor: {
                primary: "rgba(244, 237, 219, 1)",
                "primary-0.5": "rgba(244, 237, 219, 0.5)",
                "primary-0.3": "rgba(244, 237, 219, 0.3)",
                "primary-0.1": "rgba(244, 237, 219, 0.1)",
                secondary: "rgba(75, 87, 97, 1)",
                "secondary-0.8": "rgba(75, 87, 97, 0.8)",
                "secondary-0.5": "rgba(75, 87, 97, 0.5)",
                "secondary-0.3": "rgba(75, 87, 97, 0.3)",
                "secondary-0.1": "rgba(75, 87, 97, 0.1)",
                "black-0.5": "rgba(0, 0, 0, 0.50)",
                "black-0.3": "rgba(0, 0, 0, 0.30)",
                "black-0.1": "rgba(0, 0, 0, 0.10)",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
            },
            borderRadius: {
                "4xl": "2rem",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    important: true,
};
