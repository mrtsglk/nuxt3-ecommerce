export default defineNuxtConfig({
  ssr: true,
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: [
          'defineStore',
        ],
      },
    ],
    '@pinia-plugin-persistedstate/nuxt',
  ],
  runtimeConfig: {
    public:{
      apiUrl: process.env.API_URL,
      baseUrl: process.env.BASE_URL
    }
 },
 postcss: {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
},
 css: [
      './assets/styles/app.scss',
      '@fortawesome/fontawesome-svg-core/styles.css'
    ]
});