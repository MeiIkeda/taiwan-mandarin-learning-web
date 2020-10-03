import cheerio from 'cheerio'
require('dotenv').config()

const removeDataAttributeFromFlattrMetaTag = (html) => {
  const $ = cheerio.load(html, { decodeEntities: false })
  $('html').removeAttr('data-n-head', 'data-n-head-ssr')
  $('meta').removeAttr('data-n-head')
  $('link').removeAttr('data-n-head')
  $('script').removeAttr('data-n-head')
  return $.html()
}

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    titleTemplate: '%s | ' + process.env.WEBSITE_TITLE,
    // title: process.env.WEBSITE_TITLE || '',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=0.7' },
      { hid: 'keywords', name: 'keywords', content: '中国語, 台湾, 台湾華語, 繁体字, 単語, 聞き流し, ボポモフォ, 當代中文課程課' },
      { hid: 'description', name: 'description', content: '台湾で中国語を学ぶ管理人が、 日々の気付きや役に立ちそうなアプリツールを公開するサイト' },
      { hid: 'og:title', name: 'og:title', content: '台湾華語 taiwan-mandarin | 台湾で学ぶ中国語の学習ノート' },
      { hid: 'og:decription', name: 'og:decription', content: '台湾で中国語を学ぶ管理人が、 日々の気付きや役に立ちそうなアプリツールを公開するサイト' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
    // script: [{
    //   'data-ad-client': process.env.GA_ADSENSE_ID,
    //   async: true,
    //   src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
    // }]
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
    '@nuxtjs/sentry',
    // TODO 全ページに同じタグで広告を表示させるため？一時退避
    // '@nuxtjs/google-adsense',
    '@nuxtjs/google-analytics',
    '@nuxtjs/sitemap'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  sentry: {
    dsn: process.env.SENTRY_DSN, // Enter your project's DSN here
    config: {} // Additional config
  },
  // TODO 全ページに同じタグで広告を表示させるため？一時退避
  // 'google-adsense': {
  //   id: process.env.GA_ADSENSE_ID,
  //   pageLevelAds: true,
  //   analyticsUacct: process.env.GA_TRACKING_ID,
  //   analyticsDomainName: process.env.DOMAIN
  // },
  'google-analytics': {
    id: process.env.GA_TRACKING_ID
  },
  /*
  ** Build configuration
  */
  build: {
    // extractCSS: true,
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  hooks: { // 追加
    generate: {
      page (page) {
        page.html = removeDataAttributeFromFlattrMetaTag(page.html)
      }
    },
    render: {
      route (url, page) {
        page.html = removeDataAttributeFromFlattrMetaTag(page.html)
      }
    }
  },
  sitemap: {
    path: '/sitemap.xml', // 出力パス
    hostname: process.env.BROWSER_BASE_URL,
    cacheTime: 1000 * 60 * 15,
    // generate: true, // nuxt generate で静的ファイル出力する場合にはtrueにする
    exclude: [ // 除外項目
    ]
  }
}
