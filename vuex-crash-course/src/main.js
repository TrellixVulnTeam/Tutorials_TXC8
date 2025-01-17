import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Bootstrap Styles
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
