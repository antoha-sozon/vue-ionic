import Vue from 'vue';
import VueProgressBar from 'vue-progressbar'
import App from './App.vue';
import router from './router';

import Ionic from '@ionic/vue';

Vue.use(Ionic);
Vue.config.productionTip = false;

const options = {
  color: '#fa000b',
  failedColor: '#770b02',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 400
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
