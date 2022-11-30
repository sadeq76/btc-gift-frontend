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
      primary: "rgb(var(--color-primary))",
      text: "rgb(var(--color-text))",
      test: "rgb(var(--color-test))",
      overlay: "rgb(var(--color-text)/ .5)",
      background: "rgb(var(--color-background))",
      success: "rgb(var(--color-success))",
      info: "rgb(var(--color-info))",
      warn: "rgb(var(--color-warn))",
      error: "rgb(var(--color-error))",
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
  },
  plugins: [],
};
