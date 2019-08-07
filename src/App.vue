<template>
  <div id="app">
      <ion-app>
        <ion-vue-router />
        <Nav/>
      </ion-app>
  </div>
</template>

<script>
  import Nav from './components/Nav'
export default {
  name: 'App',
  components: {Nav},
}
</script>

<style>
@import "assets/css/resetr.css";
@import "assets/css/prismic-edit-button.css";
</style>
