import App from './app.vue'
import Vue from 'vue'
import router from './router/index'
import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
