<template>
  <ion-content id="content" class="ion-page ion-padding content-bg content-offset ion-text-center">
    <h1 class="head-title"><small>Welcome To</small>GameStreamTV</h1>
    <img alt="Vue logo" src="../assets/img/home_logo.png">
  </ion-content>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        gameTag: this.$root.gameTag,
      }
    },
  };
</script>
