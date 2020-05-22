import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import './quasar'
import VueToast from 'vue-toast-notification';
// Import one of available themes
import 'vue-toast-notification/dist/theme-default.css';
import moment from 'moment';

Vue.config.productionTip = false
Vue.prototype.moment = moment

Vue.use(VueToast);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
