import Vue from 'vue';
import Home from './views/Home.vue'
import Streams from './views/Streams.vue';
import Matches from './views/Matches.vue';
import Rating from './views/Rating.vue';
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
      component: Home,
    },
    {
      path: '/streams',
      name: 'streams',
      component: Streams,
    },
    {
      path: '/matches',
      name: 'matches',
      component: Matches,
    },
    {
      path: '/rating',
      name: 'rating',
      component: Rating,
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
    }
  ]
});
