<template>
    <ion-menu side="start" menuId="first">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
          <ion-item>Menu Item</ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
</template>
<style>
  .my-custom-menu {
    --width: 500px;
  }
</style>

<script lang="ts">
    export default {
        name: 'Nav',
    }
</script>
