// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/content'],

  app: {
    baseURL: '/recipes',
  },
  ssr: true, // Required for static site generation

  content: {
    // We configure multiple sources here.
    // The default source will read from the local 'content' directory.
    // We also define a 'github' source that you can point to your remote repository later.
    sources: {
      content: {
        driver: 'fs',
        base: 'content' // Local directory
      },
      // Uncomment and configure this when you are ready to serve from GitHub:
      /*
      github: {
        driver: 'github',
        repo: 'your-username/your-recipe-repo',
        branch: 'main',
        dir: 'content', // the folder in your repo containing the yaml files
        // prefix: '/github' // optional prefix to avoid collisions
      }
      */
    }
  },

  compatibilityDate: '2024-06-16'
})
