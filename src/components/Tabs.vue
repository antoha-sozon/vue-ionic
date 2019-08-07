<template>
  <ion-tabs>
    <ion-tab tab="streams">
      <Home />
    </ion-tab>

    <ion-tab tab="matches">
      <Matches />
    </ion-tab>

    <ion-tab tab="rating">
      <Rating />
    </ion-tab>

    <template slot="bottom">
      <ion-tab-bar>
        <ion-tab-button tab="streams" :to="{ name: 'home' }">
          <ion-icon name="videocam"></ion-icon>
          <ion-label>Streams</ion-label>
          <ion-badge>200</ion-badge>
        </ion-tab-button>

        <ion-tab-button tab="matches" :to="{ name: 'not-found' }">
          <ion-icon name="list"></ion-icon>
          <ion-label>Matches</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="rating" :to="{ name: 'not-found' }">
          <ion-icon name="stats"></ion-icon>
          <ion-label>Rating</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </template>
  </ion-tabs>
</template>

<script>
  export default {
    name: "Tabs",
  };
</script>

<style>
  :root {
    --padding-start: 10px;
    --padding-end: 10px;
  }
</style>
