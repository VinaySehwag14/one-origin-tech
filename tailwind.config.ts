import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Brand Teal Palette
                brand: {
                    DEFAULT: "#2FA4A0", // Primary Teal
                    dark: "#238F8B",    // Darker Teal (Hover)
                    glow: "#2FA4A0",    // For shadows/glows
                    light: "#4BBFBB",   // Light Teal (Highlights)
                },
                // Background Colors
                bg: {
                    main: "#0a0a0a",    // Main Background
                    card: "#141A1C",    // Card Background
                    elevated: "#1A2224", // Elevated Cards
                },
                // Keep navy for backward compatibility, map to new bg colors
                navy: {
                    950: "#0a0a0a", // Maps to bg.main
                    900: "#141A1C", // Maps to bg.card
                    800: "#1A2224", // Elevated
                    700: "#2A3438", // Borders & Dividers
                },
                // Gold maps to Brand Teal for compatibility
                gold: {
                    500: "#2FA4A0", // Maps to brand.DEFAULT
                    600: "#238F8B", // Maps to brand.dark
                    400: "#4BBFBB", // Maps to brand.light
                    300: "#6FD4D0", // Subtle accents
                },
                // Slate for secondary text
                slate: {
                    400: "#94A3B8", // Secondary text
                    500: "#64748B",
                    600: "#475569",
                },
            },
            backgroundImage: {
                "gold-gradient":
                    "linear-gradient(135deg, #2FA4A0 0%, #4BBFBB 100%)",
                "gold-gradient-subtle":
                    "linear-gradient(135deg, #2FA4A0 0%, #238F8B 100%)",
                "navy-gradient":
                    "linear-gradient(180deg, #0a0a0a 0%, #141A1C 100%)",
                "footer-gold":
                    "linear-gradient(180deg, transparent 0%, rgba(47, 164, 160, 0.05) 100%)",
                "brand-gradient":
                    "linear-gradient(135deg, #2FA4A0 0%, #4BBFBB 100%)",
            },
            fontFamily: {
                sans: ["var(--font-inter)", "system-ui", "sans-serif"],
            },
            animation: {
                "pulse-gold": "pulseGold 4s ease-in-out infinite",
                "pulse-brand": "pulseBrand 4s ease-in-out infinite",
                "fade-up": "fadeUp 0.6s ease-out forwards",
                "slide-in": "slideIn 0.5s ease-out forwards",
                marquee: "marquee 30s linear infinite",
            },
            keyframes: {
                pulseGold: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
                    "50%": { transform: "scale(1.05)", opacity: "1" },
                },
                pulseBrand: {
                    "0%, 100%": { transform: "scale(1)", opacity: "0.8" },
                    "50%": { transform: "scale(1.05)", opacity: "1" },
                },
                fadeUp: {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
                slideIn: {
                    "0%": { opacity: "0", transform: "translateX(-20px)" },
                    "100%": { opacity: "1", transform: "translateX(0)" },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-50%)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;