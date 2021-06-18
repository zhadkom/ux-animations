module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: ["./src/**/*.vue"],
  theme: {
    extend: {
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "639px" }
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        main: "#300256",
        secondary: "#7F39FB",
        alternative: "#FB602E",
        dark: "#1F1D1C"
      }
    }
  },
  variants: {},
  plugins: []
};
