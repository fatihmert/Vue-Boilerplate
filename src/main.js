import Vue from 'vue'
import routes from './routes'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
