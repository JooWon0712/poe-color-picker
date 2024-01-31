import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueTheMask from 'vue-the-mask';

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueTheMask);

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(),
}).$mount('#app');