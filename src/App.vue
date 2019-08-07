<template>
  <div id="app">
      <ion-app>
        <ion-header>
          <ion-toolbar>
            <ion-row align-items-center>
              <ion-col>
                <ion-buttons class="ion-float-start">
                  <ion-button>
                    <ion-menu-button></ion-menu-button>
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
                    <ion-icon slot="icon-only" name="star"></ion-icon>
                  </ion-button>
                </ion-buttons>
              </ion-col>
            </ion-row>
          </ion-toolbar>
        </ion-header>
        <Tabs/>
        <Nav/>
      </ion-app>
      <vue-progress-bar></vue-progress-bar>
  </div>
</template>

<script>
  import Nav from './components/Nav';
  import Tabs from './components/Tabs';
  export default {
    name: 'App',
    components: {Nav, Tabs},
    mounted () {
      this.$Progress.finish()
    },
    created () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        if (to.meta.progress !== undefined) {
          let meta = to.meta.progress
          this.$Progress.parseMeta(meta)
        }
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    }
  }
</script>

<style>
@import "~@ionic/core/css/ionic.bundle.css";
@import "assets/css/resetr.css";
@import "assets/css/prismic-edit-button.css";
@import "assets/css/style.css";
</style>
