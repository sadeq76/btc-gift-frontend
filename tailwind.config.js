/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,vue,ts}",
    "./src/layouts/**/*.vue",
    "./src/pages/**/*.vue",
    "./src/pages/index.vue",
    "./src/plugins/**/*.{js,ts}",
    "./src/nuxt.config.{js,ts}",
    "./src/app.vue",
  ],
  darkMode: ["class", "[data-mode='dark']"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      primary: "rgb(var(--color-primary) / <alpha-value>)",
      text: "rgb(var(--color-text) / <alpha-value>)",
      test: "rgb(var(--color-test) / <alpha-value>)",
      overlay: "rgb(var(--color-text)/ .5)",
      background: "rgb(var(--color-background) / <alpha-value>)",
      success: "rgb(var(--color-success) / <alpha-value>)",
      info: "rgb(var(--color-info) / <alpha-value>)",
      warn: "rgb(var(--color-warn) / <alpha-value>)",
      error: "rgb(var(--color-error) / <alpha-value>)",
      transparent: "transparent",
      current: "currentColor",
      white: "#fff",
    },
    fontFamily: {
      iransans: ["iransans"],
    },
    extend: {
      spacing: {
        124: "32rem",
      },
      keyframes: {
        move: {
          from: {
            transform: "translateX(-100%)",
          },
          to: {
            transform: "translateX(0%)",
          },
        },
        zoom: {
          from: {
            transform: "scale(.5) translateY(-50%)",
            opacity: "0",
            "transform-origin": "top",
          },
          to: {
            transform: "scale(1) translateY(-50%)",
            "transform-origin": "top",
          },
        },
        gradient: {
          from: {
            "background-position-x": "100vw",
          },
          to: {
            "background-position-x": "0",
          },
        },
      },
      aspectRatio: {
        "9/16": "9/16",
      },
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      "move-in": "move 0.2s forwards ease-in",
      "move-out": "move 0.2s forwards ease-in reverse",
      "zoom-in": "zoom 0.2s forwards ease-in",
      "zoom-out": "zoom 0.2s forwards ease-in reverse",
      gradient: "gradient 1s linear forwards infinite",
    },
    aria: {
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"',
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 0 10px 4px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none",
    },
  },
  plugins: [],
};
