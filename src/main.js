import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'
import vuetify from './plugins/vuetify';
import artyom from "artyom.js";
Vue.prototype.$artyom=artyom
Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
