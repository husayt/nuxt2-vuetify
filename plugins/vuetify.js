import Vue from "vue"
// import Vuetify from "vuetify"

// import App from "./App.vue"
import { VApp, VBtn, Vuetify } from "vuetify"

// Vue.use(Vuetify)

Vue.use(Vuetify, {
  components: {
    VApp,
    // VNavigationDrawer,
    // VFooter,
    // VToolbar,
    // VTooltip,
    // VCard,
    // VList,
    VBtn
    // VIcon,
    // VGrid,
    // VChip,
    // VAvatar,
    // VStepper,
    // VDivider,
    // VResponsive,
    // VSpeedDial,
    // VSubheader,
    // VProgressCircular,
    // VTabs,
    // VBadge,
    // VTextField,
    // VForm,
    // VSelect,
    // transitions
  },
  // directives: {
  //   Ripple,
  //   Scroll,
  //   Resize,
  //   Touch
  // },
  options: {
    // themeCache,
    // minifyTheme: function (val) {
    //   return process.env.NODE_ENV === "production"
    //     ? val.replace(/[\s|\r\n|\r|\n]/g, "")
    //     : null
    // }
  },
  theme: {
    primary: "#0d8237",
    accent: "#b3d893",
    secondary: "#424242",
    info: "#0D47A1",
    warning: "#ffb300",
    error: "#B71C1C",
    success: "#2E7D32"
  }
})
