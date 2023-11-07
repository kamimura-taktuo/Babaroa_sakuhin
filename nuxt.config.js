export default {
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
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/reset.css' },
      { rel: 'stylesheet' , href: 'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/css/4-1-4.css' },
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/earlyaccess/hannari.css' },
      { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css' },
      { rel: 'stylesheet' , href: 'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css' },
      { rel: 'preconnect' , href: 'https://fonts.googleapis.com'},
      { rel: 'preconnect' , href: 'https://fonts.gstatic.com'},
      { rel: 'stylesheet' , href: 'https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@1,300&display=swap'},
    ],
    script: [
      {src:'~assets/js/main.js'},
      {src:'~assets/js/main.js'},
      {src:'https://code.jquery.com/jquery-3.4.1.min.js'},
      {src:'https://coco-factory.jp/ugokuweb/wp-content/themes/ugokuweb/data/4-1-4/js/4-1-4.js'},
      {src:'https://code.jquery.com/jquery-1.11.0.min.js'},
      {src:'https://code.jquery.com/jquery-migrate-1.2.1.min.js'},
      {src:'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js'}
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
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
 
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
}
}