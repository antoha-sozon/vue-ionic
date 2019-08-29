<template>
  <div class="header-menu">
    <div class="header">
      <svg @click="menuStatus = !menuStatus" :class="{ active: menuStatus}" class="ham hamRotate ham" viewBox="0 0 100 100" width="50" >
        <path
          class="line top"
          d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
        <path
          class="line middle"
          d="m 70,50 h -40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
      </svg>
      <div class="logo">
        <router-link to="/">
          GameStreamTV
        </router-link>
      </div>
      <router-link to="/settings" :class="{ active: this.$route.path === '/settings'}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.3 480.3" fill="#f2f2f2" width="25">
          <path d="M254.15 234.1V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v220.6c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v98.2c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5v-98.2c31.3-6.3 55-34 55-67.2 0-33.1-23.6-60.9-55-67.2zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5zM88.85 120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.4c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.7-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.7 41.5-41.5 41.5zM418.45 120.9V13.5c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5v107.4c-31.3 6.3-55 34-55 67.2s23.7 60.9 55 67.2v211.5c0 7.5 6 13.5 13.5 13.5s13.5-6 13.5-13.5V255.2c31.3-6.3 55-34 55-67.2s-23.6-60.8-55-67.1zm-13.5 108.7c-22.9 0-41.5-18.6-41.5-41.5s18.6-41.5 41.5-41.5 41.5 18.6 41.5 41.5-18.6 41.5-41.5 41.5z"/>
        </svg>
      </router-link>
    </div>
    <div :class="{ active: menuStatus}" class="main-menu">
      <ul>
        <li class="dota2">
          <router-link
            tag="span"
            :to="{ name: 'streams', params: { game: 'dota2' }}"
            @click.native="menuStatus = !menuStatus"
            :class="{ active: this.$route.path === '/settings'}"
          >
            Dota 2
          </router-link>
        </li>
        <li class="csgo">
          <router-link
            tag="span"
            :to="{ name: 'streams', params: { game: 'csgo' }}"
            @click.native="menuStatus = !menuStatus"
            :class="{ active: this.$route.path === '/settings'}"
          >
            CS: GO
          </router-link>
        </li>
        <li class="lol">
          <router-link
            tag="span"
            :to="{ name: 'streams', params: { game: 'lol' }}"
            @click.native="menuStatus = !menuStatus"
            :class="{ active: this.$route.path === '/settings'}"
          >
            LoL
          </router-link>
        </li>
        <li class="overwatch">
          <router-link
            tag="span"
            :to="{ name: 'streams', params: { game: 'overwatch' }}"
            @click.native="menuStatus = !menuStatus"
            :class="{ active: this.$route.path === '/settings'}"
          >
            Overwatch
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'HeaderMenu',
    data() {
      return{
        menuStatus: false,
      }
    },
  }
</script>
