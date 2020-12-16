import Vue from 'vue'
import router from './routes'
import store from './store'

// middlewares
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
