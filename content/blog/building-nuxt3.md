---
title: Building My Portfolio with Nuxt3
description: A concise guide on setting up a personal portfolio using Nuxt 3 and Nuxt UI v3, highlighting the steps, challenges, and features implemented.
image: /image/building-portfolio.jpg
author: Syed Atef Alvi
avatar: /profile.jpeg
date: 2025-01-01
tags:
  - nuxt3
  - portfolio
  - web-development
  - featured
---

Building a personal portfolio isn’t just about showcasing work; it’s about sharing the journey of growth and discovery.

### Why Nuxt3?

Nuxt3’s simplicity and file-based routing made it the perfect framework to bring my portfolio to life. Its modularity and TypeScript support further streamlined the development process, allowing me to focus on creating meaningful content and functionality.
::callout{type="info"}
**Prerequisite:** Ensure Node.js (v16+), a package manager (npm/yarn/pnpm), and a code editor like VS Code are set up before starting.
::

### Getting Started with Nuxt3

1. **Initialize the Project:**
   ```bash
   npx nuxi init my-portfolio
   cd my-portfolio
   npm install
   ```
2. **Migrate to Nuxt 4:** To take advantage of the latest features and improvements, I migrated the project to Nuxt 4 using the codemod tool:
   ```bash
   npx codemod@latest nuxt/4/migration-recipe
   ```
3. **Set Up Tailwind CSS:** Installed Tailwind CSS for styling.
   Configured `tailwind.config.js` and imported styles in `assets/css/main.css`.
4. **Create Pages:**

- `index.vue` for the home page.
- `blog/index.vue` for Blogs Index page
- `blog/[...slug].vue` for dynamic blog rendering.

5. **Install Nuxt3 UI v3:** I chose Nuxt UI v3 to enhance my portfolio's user interface due to its comprehensive component library, seamless Nuxt integration, and built-in Tailwind CSS support, enabling rapid development without compromising design quality. Its transition from Headless UI to Reka UI as the core component foundation ensures active development, enhanced accessibility, and Vue 3 optimization, making it a forward-thinking choice with strong future support.
   ```bash
   npm install @nuxt/ui@next
   ```
6. **Configure the Module:**

   ```ts
   export default defineNuxtConfig({
     modules: ["@nuxt/ui"],
     css: ["~/assets/css/main.css"],
   });
   ```

7. **Warp the App:**
   ```html
   <template>
     <UApp>
       <NuxtPage />
     </UApp>
   </template>
   ```
8. **Run the Development Server:** After completing the setup, start the development server to see your project live:
   ```bash
   npm run dev
   ```

::callout{type="tip"}
Run **npm run dev -- --host 0.0.0.0** to access your site from any device on the same network. Perfect for responsiveness checks!
::

### Source Code

The entire source code for this portfolio project is available on **[GitHub](https://github.com/atefalvi/v3pf)**. Feel free to explore, fork, or contribute to the repository!

### Challenges, Breakthroughs, and Favorite Features

Building my portfolio came with its own set of challenges, but each hurdle taught me something valuable. Here are some highlights:

- **Dynamic Blog Setup:** Setting up a dynamic blog system using Markdown files for content was both challenging and rewarding. It simplified content management while keeping the structure clean.
- **Dark Mode:** Seamlessly integrating a dark mode toggle made the site more user-friendly and modern.
- **Typing Animations:** Adding interactive elements like typing animations on the homepage brought a touch of liveliness to the UI.
- **Custom Styling:** Combining Tailwind CSS and Nuxt UI v3 allowed me to create a polished, responsive design without extensive CSS writing.

### What’s Next?

With the foundation set, here are some features I plan to implement to take the portfolio to the next level:

- **Contact Me Page:** Building a contact form with form validation.
- **Bring in Projects from GitHub:** Dynamically display my GitHub repositories on the portfolio to showcase my open-source contributions and projects.
- **Improve SEO:** Use Nuxt's `useHead` composable to dynamically update metadata for better SEO performance and discoverability.
- **Add Animations:** Enhance user engagement with subtle animations and transitions.

### Conclusion

This journey with Nuxt3 and Nuxt UI v3 has been both challenging and rewarding. From setting up the project to creating a functional and aesthetically pleasing portfolio, each step reinforced the importance of hands-on learning. If you're starting a project, my advice is simple: dive in, experiment, and learn as you go. The results will be worth it!

Thank you for following along with my journey. Feel free to reach out if you have questions or feedback!
