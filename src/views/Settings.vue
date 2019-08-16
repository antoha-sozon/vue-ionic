<template>
  <ion-content id="content" class="ion-page ion-padding content-bg content-offset ion-text-center">
    <ion-list>
      <ion-item>
        <ion-label>Pepperoni</ion-label>
        <ion-toggle value="pepperoni"></ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label>Sausage</ion-label>
        <ion-toggle value="sausage" checked></ion-toggle>
      </ion-item>

      <ion-item>
        <ion-label>Mushrooms</ion-label>
        <ion-toggle value="mushrooms" disabled></ion-toggle>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script>
  export default {
    name: 'Settings',
  }
</script>
