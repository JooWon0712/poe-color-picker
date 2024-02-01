import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import VueTheMask from 'vue-the-mask';
import VueClipboard from 'vue-clipboard2';

Vue.config.productionTip = false

Vue.use(Vuetify);
Vue.use(VueTheMask);
Vue.use(VueClipboard);

new Vue({
  render: (h) => h(App),
  vuetify: new Vuetify(),
}).$mount('#app');