import Vue from 'vue';

import Index from './views/Index.vue'
import Stream from './components/Stream.vue';
import TourMatches from './views/TourMatches.vue'
import GameNews from './views/GameNews.vue'
import TeamRating from './views/TeamRating.vue'

import Home from './views/Home.vue'
import Streams from './views/Streams.vue';
import Matches from './views/Matches.vue';
import Rating from './views/Rating.vue';
import Settings from './views/Settings.vue'
import NotFound from './views/NotFound.vue';
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/streams/:game',
      name: 'streams',
      component: Streams,
    },
    {
      path: '/streams/:name',
      name: 'stream',
      component: Stream,
    },
    {
      path: '/tourmatches/:game',
      name: 'tourmatches',
      component: TourMatches,
    },
    {
      path: '/gamenews',
      name: 'gamenews',
      component: GameNews,
    },
    {
      path: '/teamrating',
      name: 'teamrating',
      component: TeamRating,
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
      path: '/settings',
      name: 'settings',
      component: Settings,
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound,
    }
  ]
});
