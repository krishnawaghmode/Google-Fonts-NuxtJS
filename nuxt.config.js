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

      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Hanalei&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Butcherman&family=Hanalei&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Bungee+Outline&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Nosifer&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Akronim&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Mulish:wght@900&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Oxygen&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Alegreya&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Roboto&display=swap"},

      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Comforter&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Sura:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Rubik+Beastly&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Tillana&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@800&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Mulish&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Poppins&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Kalam:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@800&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Sura:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Sumana:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Sahitya:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Arya:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Vesper+Libre:wght@900&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Hind:wght@700&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Martel:wght@900&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Yantramanav:wght@900&display=swap"},
      // {rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Eczar:wght@800&display=swap"}
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