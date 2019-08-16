<template>
  <ion-content id="content" class="ion-page content-bg content-offset ion-text-center">
    <div class="rating">
      <div v-for="rate in rating" class="rating_block">
        <div>
          🏆
        </div>
        <div>
          {{ rate.team_name }}
        </div>
        <div>
          {{ rate.team_prize }}
        </div>
      </div>
    </div>
  </ion-content>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "rating",
    data() {
      return {
        rating: [],
      }
    },
    mounted () {
      this.getRating()
    },
    methods: {
      getRating() {
        axios.get('http://api.gamestreamtv.ru/json/dota2/rating/?token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.rating = response.data[0];
            console.log(this.rating);
          }).catch((error) => {
          console.log(error);
        });
      },
    }
  };
</script>
