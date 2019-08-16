<template>
  <div>
    <ion-menu class="main_menu" side="start" content-id="content">
      <ion-header>
        <ion-toolbar class="menu-toolbar">
          <ion-row align-items-center>
            <ion-col>
              <ion-buttons class="ion-float-start">
                <ion-button @click="closeModal">
                  <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
                </ion-button>
              </ion-buttons>
            </ion-col>
            <ion-col text-center>
              <div>
                <ion-title>game video app</ion-title>
              </div>
            </ion-col>
          </ion-row>
        </ion-toolbar>
      </ion-header>

      <ion-content class="content-bg">
        <ion-list>
          <ion-item class="menu-toolbar-item">
            <router-link tag="button" to="/">
              <span @click="closeModal"><ion-icon name="home" class="menu-icons"></ion-icon> Home</span>
            </router-link>
          </ion-item>
          <ion-item class="menu-toolbar-item">
            <router-link tag="button" to="/streams">
              <span @click="closeModal" name="Dota 2"><img src="../assets/img/dota_logo.svg" class="menu-icons" alt=""> Dota 2</span>
            </router-link>
          </ion-item>
          <ion-item class="menu-toolbar-item">
            <router-link tag="button" to="/streams">
              <span @click="closeModal" name="Counter-Strike: Global Offensive"><img src="../assets/img/csgo_logo.svg" class="menu-icons" alt=""> CS: GO</span>
            </router-link>
          </ion-item>
          <ion-item class="menu-toolbar-item">
            <router-link tag="button" to="/settings">
              <span @click="closeModal" name=""><img src="../assets/img/settings.svg" class="menu-icons" alt=""> Settings</span>
            </router-link>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-menu-controller></ion-menu-controller>
  </div>
</template>

<script>
  export default {
    name: 'Nav',
    methods: {
      closeModal: function (e) {
          document.querySelector('ion-menu').close();
          this.$parent.gameTag = e.currentTarget.getAttribute('name');
      },
    }
  }
</script>
