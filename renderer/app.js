import { createSSRApp, h } from 'vue'
import PageLayout from './PageLayout.vue'
import vuetify from './vuetify'

export { createApp }

function createApp(pageContext) {
  const { Page, pageProps } = pageContext
  const PageWithLayout = {
    render() {
      return h(
        PageLayout,
        {},
        {
          default() {
            return h(Page, pageProps || {})
          }
        }
      )
    }
  }

  const app = createSSRApp(PageWithLayout)

  app.use(vuetify)

  // We make `pageContext.routeParams` available in all components as `$routeParams`
  // (e.g. `$routeParams.movieId` for a Route String `/movie/:movieId`).
  app.config.globalProperties.$routeParams = pageContext.routeParams

  return app
}
