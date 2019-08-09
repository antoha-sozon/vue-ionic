<template>
  <div>

    <ion-content id="content" class="ion-page ion-padding content-bg content-offset ion-text-center">
      <h1 class="head-title"><small>Welcome To</small>GameStreamTV</h1>
      <img alt="Vue logo" src="../assets/img/home_logo.png">
    </ion-content>

    <ion-footer>
      <ion-toolbar class="tabs-style">
        <ion-row>
          <ion-col>
            <ion-buttons>
              <ion-tab-button>
                <ion-icon name="desktop"></ion-icon>
                <ion-label>Streams</ion-label>
              </ion-tab-button>
            </ion-buttons>
          </ion-col>
          <ion-col>
            <ion-buttons>
              <ion-tab-button>
                <ion-icon name="list"></ion-icon>
                <ion-label>Matches</ion-label>
              </ion-tab-button>
            </ion-buttons>
          </ion-col>
          <ion-col>
            <ion-buttons>
              <ion-tab-button>
                <ion-icon name="stats"></ion-icon>
                <ion-label>Rating</ion-label>
              </ion-tab-button>
            </ion-buttons>
          </ion-col>
        </ion-row>
      </ion-toolbar>
    </ion-footer>
  </div>
</template>

<script>
  export default {
    name: "home",
    data() {
      return {
        gameTag: this.$root.gameTag,
      }
    },
  };
</script>
