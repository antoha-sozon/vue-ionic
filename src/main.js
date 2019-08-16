import Vue from 'vue';
import Vuex from 'vuex';
import VueProgressBar from 'vue-progressbar'
import App from './App.vue';
import router from './router';
import Ionic from '@ionic/vue';
import * as Tabs from "vue-slim-tabs";

Vue.use(Vuex);
Vue.use(Ionic);
Vue.use(Tabs);
Vue.use(require("vue-moment"));
Vue.use(VueProgressBar, {
  color: '#a3ff12',
  failedColor: '#ff1212',
  thickness: '10px',
  transition: {
    speed: '0.4s',
    opacity: '0.7s',
    termination: 500
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    gameTag: 'Dota 2',
  },
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
