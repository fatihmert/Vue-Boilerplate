import Vue from 'vue'
import router from './routes'
import store from './store'
import i18n from './lang'

// middlewares
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)
import VueMask from 'v-mask'
Vue.use(VueMask)
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
