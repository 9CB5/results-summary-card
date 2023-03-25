/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './style.css',
        './style-compiled.css'
    ],
    theme: {
        colors: {
            "blue": {
                "dark": "hsl(234, 85%, 45%)",
                "slate": "hsl(252, 100%, 67%)",
                "royal": "hsl(241, 81%, 54%)",
                "violet": "hsla(256, 72%, 46%, 1)",
                "persian": "hsla(241, 72%, 46%, 0)",
                "light": "hsla(234, 85%, 45%, 0.1)",
                "pale": "hsl(221, 100%, 96%)"
            },
            "gray": {
                "blue": "hsl(224, 30%, 27%)",
                "light": "hsla(224, 30%, 27%, 0.5)"
            },
            "lavender": "hsl(241, 100%, 89%)",
            "white": "hsl(0, 0%, 100%)",
            "red": {
                "dark": "hsl(0, 100%, 67%)",
                "light": "hsla(0, 100%, 67%, 0.1)"
            },
            "yellow": {
                "dark": "hsl(39, 100%, 56%)",
                "light": "hsla(39, 100%, 56%, 0.1)"
            },
            "teal": {
                "dark": "hsl(166, 100%, 37%)",
                "light": "hsla(166, 100%, 37%, 0.1)"
            }
        },
        container: {
            center: true,
        },
        extend: {
            fontFamily: {
                "hanken": ["'Hanken Grotesk'"]
            }
        },
        screens: {
            "xl": "768px"
        }
    },
    plugins: [],
}
