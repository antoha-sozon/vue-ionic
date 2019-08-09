import Vue from 'vue';
import Vuex from 'vuex';
import VueProgressBar from 'vue-progressbar'
import App from './App.vue';
import router from './router';
import Ionic from '@ionic/vue';

Vue.use(Vuex);
Vue.use(Ionic);
Vue.use(VueProgressBar, {
  color: '#437cb2',
  failedColor: '#2b3b5a',
  thickness: '6px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
});

Vue.config.productionTip = false;

new Vue({
  router,
  data() {
    return {
      gameTag: 'Dota 2',
    }
  },
  render: h => h(App)
}).$mount('#app');
