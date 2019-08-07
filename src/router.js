import Vue from 'vue';
import Home from './views/Home.vue';
import NotFound from './views/NotFound.vue';
import { IonicVueRouter } from '@ionic/vue';

Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    }
  ]
});
