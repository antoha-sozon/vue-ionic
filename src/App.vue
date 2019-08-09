<template>
  <div id="app">
      <ion-app>
        <Nav/>
        <Headbar/>
          <Home v-if="this.$route.path === '/' || this.$route.path === '/home'"/>
          <Settings v-else-if="this.$route.path === '/settings'"/>
          <Tabs v-else/>
      </ion-app>
      <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Headbar from './components/Header';
  import Home from './views/Home';
  import Settings from './views/Settings';
  import Nav from './components/Nav';
  import Tabs from './components/Tabs';

  export default {
    name: 'App',
    components: {Home, Settings, Headbar, Nav, Tabs},
    mounted () {
      this.$Progress.finish()
    },
    created () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    }
  }
</script>

<style>
@import "~@ionic/core/css/ionic.bundle.css";
@import "assets/css/resetr.css";
@import "assets/css/prismic-edit-button.css";
@import "assets/css/style.css";
</style>
