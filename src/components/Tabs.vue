<template>
  <ion-tabs>
    <ion-tab tab="streams">
      <Streams />
    </ion-tab>

    <ion-tab tab="matches">
      <Matches />
    </ion-tab>

    <ion-tab tab="rating">
      <Rating />
    </ion-tab>

    <ion-tab-bar slot="bottom" class="md hydrated tabs">
      <ion-tab-button tab="streams">
        <ion-icon name="desktop"></ion-icon>
        <ion-label>Streams</ion-label>
        <ion-badge class="badge">200</ion-badge>
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
</template>

<script>
  import Streams from '../views/Streams.vue';
  import Matches from '../views/Matches.vue';
  import Rating from '../views/Rating.vue';
  export default {
    name: "Tabs",
    components: {Streams, Matches, Rating},
  };
</script>
