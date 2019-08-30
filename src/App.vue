<template>
  <div id="app">
    <HeaderMenu/>
    <router-view :key="$route.fullPath" />
    <FooterMenu/>
  </div>
</template>

<script>
  import HeaderMenu from './components/HeaderMenu';
  import FooterMenu from './components/FooterMenu';


  export default {
    name: 'App',
    components: {HeaderMenu, FooterMenu},
  }
</script>

<style>
@import "assets/css/main.css";
</style>
