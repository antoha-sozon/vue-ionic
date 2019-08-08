<template>
  <div id="app">
      <ion-app>
        <Nav/>
        <Headbar/>
          <Home v-if="homePage"/>
          <Tabs v-else/>
      </ion-app>
      <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Headbar from './components/Header';
  import Home from './views/Home';
  import Nav from './components/Nav';
  import Tabs from './components/Tabs';
  export default {
    name: 'App',
    components: {Home, Headbar, Nav, Tabs},
    computed: {
      homePage() {
        return this.$route.path === '/home' || this.$route.path === '/';
      }
    },
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
