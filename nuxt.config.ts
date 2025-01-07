// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image", "@nuxt/content"],
  content: {
    highlight: {
      theme: "github-dark", // Theme for code blocks
      preload: [
        "javascript",
        "python",
        "bash",
        "sql",
        "vue",
        "sparql",
        "css",
        "html",
        "git-commit",
        "zsh",
        "json",
      ], // Languages to preload
    },
    markdown: {
      remarkPlugins: [
        "remark-math", // For math support
        "remark-gfm", // For GitHub Flavored Markdown
      ],
      rehypePlugins: [
        "rehype-katex", // For math rendering
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: "2024-11-27",
  runtimeConfig: {
    sendgridApiKey: process.env.NUXT_SENDGRID_API_KEY,
    public: {
      // Public variables (if needed)
    },
  },
});
