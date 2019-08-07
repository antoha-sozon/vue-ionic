<template>
    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding ion-text-center">
        <h1>Welcome To @ionic/vue</h1>
        <img alt="Vue logo" src="../assets/img/vue-logo.png">
      </ion-content>
      <Tabs/>
    </div>
</template>

<script>
  import Tabs from '../components/Tabs'
  export default {
    name: "home",
    components: {Tabs},
  };
</script>
