import head from './config/head'
import modules from './config/modules'
import buildModules from './config/buildModules'

export default {
  head,
  modules,
  buildModules,

  router: {
    trailingSlash: true,
  },

  target: 'static',
  srcDir: 'src',
  server: {
    port: 8000,
  },

  css: [],
  plugins: [],

  components: true,

  generate: {
    fallback: true,
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
