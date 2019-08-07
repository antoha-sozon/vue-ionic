<template>
  <ion-content  class="ion-padding ion-text-center">
  <ion-tabs >
    <ion-tab tab="/">
      <Home />
    </ion-tab>

    <ion-tab tab="matches">
      <Matches />
    </ion-tab>

    <ion-tab tab="rating">
      <Rating />
    </ion-tab>

    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="/">
        <ion-icon name="videocam"></ion-icon>
        <ion-label>Streams</ion-label>
        <ion-badge>200</ion-badge>
      </ion-tab-button>

      <ion-tab-button tab="matches">
        <ion-icon name="list"></ion-icon>
        <ion-label>Matches</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="rating">
        <ion-icon name="stats"></ion-icon>
        <ion-label>Rating</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>
  </ion-content>
</template>

<script>
  import Home from '../views/Home.vue';
  import Rating from '../views/Rating.vue';
  import Matches from '../views/Matches.vue';
  export default {
    name: "Tabs",
    components: {Home, Rating, Matches},
  };
</script>
