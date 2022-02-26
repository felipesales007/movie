import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './services/axios'
import env from '../env'
import moment from 'moment'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import Components from './components'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/style.css'

moment.locale('pt-br')

Vue.use(axios)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Components)

Vue.config.productionTip = false
Vue.prototype.$env = env
Vue.prototype.$moment = moment

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
