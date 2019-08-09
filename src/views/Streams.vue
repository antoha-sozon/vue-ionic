<template>
  <ion-content id="content" class="ion-page content-bg content-offset ion-text-center">
    <div class="streams">
      <div v-for="stream in data" class="streams-block">
        <div>
          <img :src="stream.preview.medium" alt="">
        </div>
        <div>
          <h4>{{stream.channel.display_name}}</h4>
          <p>{{stream.channel.status}}</p>
          <span><img src="../assets/img/users.svg" alt=""> {{stream.viewers}}</span>
        </div>
      </div>
    </div>
  </ion-content>
</template>

<script>
  import axios from 'axios';
  const key = '713tpdwvmexp84rh4i1zmgx2w5b21rz';
  const limit = 20;

  export default {
    name: 'Streams',
    data() {
      return {
        data: [],
      };
    },
    mounted() {
      axios
        .get('https://api.twitch.tv/kraken/streams?game=' + this.$root.gameTag + '&limit=' + limit + '&offset=0&stream_type=live&client_id='+ key)
        .then(response => (
          this.data = response.data.streams
        ));
    },
  }
</script>
