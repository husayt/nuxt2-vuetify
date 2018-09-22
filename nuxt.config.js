const nodeExternals = require("webpack-node-externals")
export default {
  /*
  ** Headers of the page
  */
  head: {
    title: "my-project",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [
      {
        href:
          "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons",
        rel: "stylesheet",
        async: true
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  css: [
    {
      src: "~/assets/app.styl",
      lang: "styl"
    }
    // {
    // src: "vuetify/dist/vuetify.min.css"
    // rel: "stylesheet"
    // }
  ],
  plugins: ["~/plugins/vuetify.js"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: "#3B8070" },
  /*
  ** Build configuration
  */
  build: {
    babel: {
      plugins: [
        [
          "transform-imports",
          {
            vuetify: {
              transform: "vuetify/es5/components/${member}",
              preventFullImport: true
            }
          }
        ]
      ]
    },
    extend(config, { isDev, isClient, isServer }) {
      if (isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
