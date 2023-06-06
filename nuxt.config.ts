// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@pinia/nuxt"],
  plugins: [
    '~/plugins/axios',
    '~/plugins/utli'
  ],
  runtimeConfig: {
    public: {
      apiBase : process.env.API_BASE
    }
  },
  
});
