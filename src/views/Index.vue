<template>
  <div>
    <fulfilling-bouncing-circle-spinner
      v-if="isLoading"
      :animation-duration="4000"
      :size="80"
      color="#a3ff12"
      class="spinner-center"
      :style="'position: absolute;'"
    />
    <div v-if="isLoading === false" v-cloak v-for="stream in data" class="stream_block"
         :style="'background-image: url(' + stream.preview.medium + ');'">
      <div class="stream_block__info">
        <div class="stream_block__title">
          <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/7714a7c7-25b9-4a2b-9d45-99cd5554004c-profile_image-300x300.png"
               alt=""
          >
          <div class="stream_block__text">
            <h3>{{ stream.channel.display_name }}</h3>medium
            <span>{{ stream.channel.status }}</span>
          </div>
        </div>
        <div class="stream_block__viewers">
          <svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="50" fill="red"></circle>
          </svg>
          <span>{{ stream.viewers }}</span>
        </div>
      </div>
      <div class="stream_block__link">
        <router-link :to="'/streams/' + stream.channel.name">
          View broadcasts
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { FulfillingBouncingCircleSpinner } from 'epic-spinners';

  export default {
    name : 'Home',
    data() {
      return {
        isLoading: true,
        data: [],
      };
    },
    mounted () {
      this.getStreamInfo();
    },
    components: {
      FulfillingBouncingCircleSpinner
    },
    methods: {
      getStreamInfo() {
        axios.get('http://api.gamestreamtv.ru/json/dota2/streams/?token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            if(response) {
              this.data = response.data;
              setTimeout(() => this.isLoading = false, 1000);
            }
          }).catch((error) => {
          if(response) {
            console.log(error);
          }
        });
      },
    },
  }
</script>
