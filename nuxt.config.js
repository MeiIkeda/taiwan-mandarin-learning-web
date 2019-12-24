require('dotenv').config()

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.WEBSITE_TITLE || '',
    htmlAttrs: {
      lang: 'ja'
    },
    script: [
      { 'async src': 'https://www.googletagmanager.com/gtag/js?id=' + process.env.GA_TRACKING_ID },
      { __html:
        `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.GA_TRACKING_ID}');
        `
       }
      // { '\nwindow.dataLayer': 'window.dataLayer || [] ;\n' + 'function gtag(){ dataLayer.push(arguments);}\n' + 'gtag(\'js\', new Date());\n' + 'gtag(\'config\', ' + process.env.GA_TRACKING_ID + ');\n'}
      // }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.5' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]

    // <!-- Global site tag (gtag.js) - Google Analytics -->
    // <script async src="https://www.googletagmanager.com/gtag/js?id=UA-154891283-1"></script>
    // <script>
    //   window.dataLayer = window.dataLayer || [];
    //   function gtag(){dataLayer.push(arguments);}
    //   gtag('js', new Date());
    //
    //   gtag('config', 'UA-154891283-1');
    // </script>
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  serverMiddleware: [
    'redirect-ssl'
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
    // '@nuxtjs/google-gtag',
    // {
    //   id: 'UA-154891283-1', //あなたのGoogleアナリティクスのプロパティID
    //   debug: true //本番環境以外でもGAを有効にしたい場合はtrueに。
    // }
    // '@nuxtjs/google-adsense', {
    //   pageLevelAds: true,
    //   tag: 'adsbygooglea'
    //   // id: process.env.GA_ADSENSE_ID
    //   // pageLevelAds: true
    //   // analyticsUacct: process.env.GA_TRACKING_ID, // アナリティクスと連携する場合のみ必要
    //   // analyticsDomainName: domain                 // アナリティクスと連携する場合のみ必要
    // }
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
