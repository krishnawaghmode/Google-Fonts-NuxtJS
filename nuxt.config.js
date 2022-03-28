export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'googlefont',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
     "~assets/style.css"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
       '@nuxtjs/google-fonts'
  ],
  googleFonts: {
  families: {
    Roboto: true,
    Teko: true,
    Amita:true,
    Kalam:true,
    Tillana:true,
    'Noto+Sans':true,
    'Yatra+One':true,
    'Inknut+Antiqua':true,
    'Vesper+Libre':true,
    Sura:true,
    Mukta:true,
    Sumana:true,
    Gotu:true,
    Sahitya:true,
    Arya:true,
    Hanalei:true,
    Butcherman:true,
    Nosifer:true,
    Akronim:true,
    Mulish:true,
    Oxygen:true,
    Alegreya:true,
    Hind:true,
    Martel:true,
    Yantramanav:true,
    Eczar:true,
    'Comforter+Brush':true,
    'Rubik+Beastly':true,
    'Beth+Ellen':true,
    Poppins:true,

    // Lato: [100, 300],
    // Raleway: {
      wght: [900],
    //   ital: [100]
    // },
  }
},
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}