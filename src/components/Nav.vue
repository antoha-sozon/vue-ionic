<template>
    <ion-menu side="start" menuId="first">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Start Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list>
          <ion-item >
            <router-link tag="button" to="/" exact>
              <span @click="closeModal">Home</span>
            </router-link>
          </ion-item>
          <ion-item>
            <router-link tag="button" to="/matches" exact>
              <span @click="closeModal">Matches</span>
            </router-link>
          </ion-item>
          <ion-item>
            <router-link tag="button" to="/rating" exact>
              <span @click="closeModal">Rating</span>
            </router-link>
          </ion-item>
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
    methods: {
      closeModal: function () {
          document.querySelector('ion-menu').close();

      }
    }
  }
</script>
