<template>
    <div class="ion-page" main>
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>ERROR</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding ion-text-center">
        <h1>Page not found</h1>
        <h1>404</h1>
      </ion-content>
      <Tabs/>
    </div>
</template>

<script>
  import Tabs from '../components/Tabs'
  export default {
    name: "NotFound",
    components: {Tabs},
  };
</script>
