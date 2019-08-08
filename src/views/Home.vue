<template>
  <ion-content id="content" class="ion-page ion-padding content-bg content-offset ion-text-center">
    <h1>Welcome To @ionic/vue</h1>
    <h1>{{ this.$root.gameTag }}</h1>
    <img alt="Vue logo" src="../assets/img/vue-logo.png">
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
