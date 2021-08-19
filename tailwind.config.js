const colors = require("tailwindcss/colors")

module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: "media", // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                bgPattern: "url('/src/assets/bgpattern.svg')",
                bgSocial: "url('/src/assets/social-bg.svg')",
            }),
            boxShadow: {
                "2xlpurple":
                    "-20px 20px 25px -5px rgba(140, 48, 245, 0.25), 0 10px 10px -5px rgba(140, 48, 245, 0.25)",
            },
            inset: {
                15: "3.75rem",
                17: "4.25rem",
                28: "7rem",
                30: "7.5rem",
                38: "9.5rem",
                50: "12.5rem",
                58: "14.5rem",
                68: "17rem",
                73: "18.25rem",
                76: "19rem",
            },
            blur: {
                xs: "2px",
            },
            colors: {
                fuchsia: colors.fuchsia,
                orange: colors.orange,
                teal: colors.teal,
            },
            animation: {
                blob: "blob 7s linear infinite",
                blob2: "blob2 4s linear infinite",
                shimmer: "shimmer 2s linear infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform:
                            "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform:
                            "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                blob2: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform:
                            "translate(10px, -30px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(0px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                shimmer: {
                    "0%": {
                        transform: "translateX(-150%)",
                    },
                    "25%": {
                        transform: "translateX(-75%)",
                    },
                    "50%": {
                        transform: "translateX(0%)",
                    },
                    "75%": {
                        transform: "translateX(75%)",
                    },
                    "100%": {
                        transform: "translateX(150%)",
                    },
                },
            },
            width: {
                112: "28rem",
                128: "32rem",
                144: "36rem",
                176: "44rem",
                192: "48rem",
            },
        },
    },
    variants: {
        extend: {
            opacity: ["disabled"],
            backgroundColor: ["disabled"],
            cursor: ["disabled"],
            blur: ["hover"],
            brightness: ["hover"],
            display: ["hover"],
            ringWidth: ["hover", "active"],
        },
    },
    plugins: [],
}
