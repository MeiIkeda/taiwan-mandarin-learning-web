require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.BASE_TITLE || '',
    // title: 'Taiwan Mandarin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      }, // <meta name="viewport" content="width=960">
      { hid: 'description',
        name: 'description',
        content: process.env.BASE_DESCRIPTION || ''
        // content: '台湾好きな管理人が、台湾華語(=中国語)を勉強しつつ更新する学習サイト。'
      },
      { hid: 'og:url', property: 'og:url', content: process.env.BASE_URL },
      { hid: 'og:title', property: 'og:title', content: process.env.BASE_TITLE },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:description',
        property: 'og:description',
        // content: '台湾好きな管理人が、台湾華語(=中国語)を勉強しつつ更新する学習サイト。'
        content: process.env.BASE_DESCRIPTION || ''
      },
      // { hid: 'og:image', property: 'og:image', content: process.env.BASE_Img },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'og:site_name', property: 'og:site_name', content: process.env.BASE_TITLE },
      { hid: 'og:locale', property: 'og:locale', content: 'ja_JP' }
      // { hid: 'fb:app_id', property: 'fb:app_id', content: process.env.BASE_appID }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/dotenv',
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/sentry'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    config: {} // Additional config
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
