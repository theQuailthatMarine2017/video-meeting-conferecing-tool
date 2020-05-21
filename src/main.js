import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './quasar'
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';

Vue.config.productionTip = false

Vue.use(VueToast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
