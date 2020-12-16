import Vue from 'vue'
import routes from './routes'
import store from './store'

import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  routes,
  store,
  render: h => h(App),
}).$mount('#app')
