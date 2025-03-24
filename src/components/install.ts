import { type App } from 'vue'
import Linking from './Linking.vue'
Linking.install = function (app: App) {
  app.component(Linking.name as string, Linking)
}
export default Linking
