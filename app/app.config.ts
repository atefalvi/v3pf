export default defineAppConfig({
  // https://ui3.nuxt.dev/getting-started/theme#design-system
  ui: {
    colors: {
      primary: "green",
      neutral: "neutral",
    },
    button: {
      defaultVariants: {
        // Set default button color to neutral
        // color: 'neutral'
      },
    },
  },
  toaster: {
    position: "top-center" as const,
    expand: true,
    duration: 5000,
  },
});
