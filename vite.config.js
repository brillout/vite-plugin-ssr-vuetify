import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'

export default {
  plugins: [vue(), ssr()],
  define: { 'process.env': {} },
  ssr: { external: ['vuetify'] }
}
