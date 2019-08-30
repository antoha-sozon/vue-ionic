import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import * as Tabs from 'vue-slim-tabs';
import Moment from 'vue-moment';

Vue.use(Vuex);
Vue.use(Moment);
Vue.use(Tabs);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
