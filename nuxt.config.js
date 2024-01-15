const webpack = require("webpack")
import axios from 'axios'

/*export default*/
module.exports =  {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Babaroa_sakuhin',
    htmlAttrs: {
      lang: 'ja'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'pkg.description' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css' },
      { rel: 'stylesheet' , href: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/css/4-1-4.css' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/earlyaccess/hannari.css'},
      { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css',
      integrity:'sha512-yHknP1/AwR+yx26cB1y0cjvQUMvEa2PFzt1c9LlS4pRQ5NOTZFWbhBig+X9G9eYW/8m0/4OXNx8pxJ6z57x0dw==' ,
      crossorigin:'anonymous',referrerpolicy:'no-referrer'},
      { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' ,
      integrity:'sha512-17EgCFERpgZKcm0j0fEq1YCJuyAWdz9KUtv1EjVuaOz8pDnh/0nZxmU6BBXwaaxqoi9PQXnRWqlcDB027hgv9A==',
      crossorigin:'anonymous',referrerpolicy:'no-referrer'},
      { rel: 'preconnect' , href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect' , href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300&display=swap'},
    ],
    script: [
      // {src:'~assets/js/main.js'},
      // {src:'~assets/js/Video.js'},
      {src:'https://code.jquery.com/jquery-3.4.1.min.js',
      integrity:'sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=',
      crossorigin:'anonymous'},
      {src:'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/js/4-1-4.js'},
      {src:'https://code.jquery.com/jquery-1.11.0.min.js'},
      {src:'https://code.jquery.com/jquery-migrate-1.2.1.min.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js',
      integrity:'sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==',
      crossorigin:'anonymous',referrerpolicy:'no-referrer'}
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [ ['nuxt-microcms-module'] ],

  microcms: {
    options: {
      serviceDomain: process.env.test1024,
      apiKey: process.env.Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi,
    },
    mode: process.env.NODE_ENV === 'production' ? 'server' : 'all',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios','@nuxtjs/proxy'],

  proxy: {
    '/.netlify': 'http://localhost:3000'
  },
 
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {vendor: ["jquery", "bootstrap"],
  plugins: [
    new webpack.ProvidePlugin({
      jQuery:'jquery',
      $: 'jquery'
    })
  ],
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        path: '/category/:categoryId/page/:p',
        component: resolve(__dirname, 'pages/category/_slug/index.vue'),
        name: 'category',
      })
    },
  },

  generate: {
    async routes() {
      const limit = 10
      const range = (start, end) =>
        [...Array(end - start + 1)].map((_, i) => start + i)

      // 一覧のページング
      // const pages = await axios
      //   .get(`https://test1024.microcms.io/api/v1/menu?limit=0`, {
      //     headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' },
      //   })
      //     .then((res) =>
      //       range(1, Math.ceil(res.data.totalCount / limit)).map((p) => ({
      //         route: `/category/:categoryId/page/${p}`,
      //       }))
      //     )

      const menu = await axios
        .get(`https://test1024.microcms.io/api/v1/menu?fields=id`, {
          headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' },
        })
          .then(({ data }) => {
            return data.contents.map((content) => content.id)
          });

      // カテゴリーページのページング
      const categoryPages = await Promise.all(
        menu.map((category) =>
          axios.get(
            `https://test1024.microcms.io/api/v1/menu?limit=0&filters=category[equals]${category}`,
            { headers: { 'X-MICROCMS-API-KEY': 'Hwlkh7zsv3NQTyceA44qLqRecQ1ocae1NRGi' } }
          )
            .then((res) =>
              range(1, Math.ceil(res.data.totalCount / 10)).map((p) => ({
                route: `/category/${category}/page/${p}`,
              })))
      )
      )

      // 2次元配列になってるのでフラットにする
      const flattenCategoryPages = [].concat.apply([], categoryPages)
      // return [...pages, ...flattenCategoryPages]
      return [...flattenCategoryPages]
    },
  },
}
