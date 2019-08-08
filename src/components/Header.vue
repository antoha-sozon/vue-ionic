<template>
  <ion-header>
    <ion-toolbar class="toolbar-bg">
      <ion-row align-items-center>
        <ion-col>
          <ion-buttons class="ion-float-start">
            <ion-button>
              <ion-menu-button class="header-button"></ion-menu-button>
            </ion-button>
          </ion-buttons>
        </ion-col>
        <ion-col text-center>
          <div>
            <ion-title>Header</ion-title>
          </div>
        </ion-col>
        <ion-col>
          <ion-buttons class="ion-float-end">
            <ion-button>
              <ion-icon class="header-login-button" name="logo-steam"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-col>
      </ion-row>
    </ion-toolbar>
  </ion-header>
</template>

<script>
    export default {
        name: 'headbar',
    }
</script>
