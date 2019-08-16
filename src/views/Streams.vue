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

  export default {
    name: 'Streams',
    data() {
      return {
        data: [],
      };
    },
    mounted () {
      this.getStreamInfo();
    },
    methods: {
      getStreamInfo() {
        axios.get('https://api.twitch.tv/kraken/streams/?game=Dota 2&limit=100&client_id=713tpdwvmexp84rh4i1zmgx2w5b21rz')
          .then((response) => {
            if(response) {
              let streams = response.data.streams;
              for (let i = 0; i < streams.length; i++) {
                let obj = streams[i];
                if (obj.viewers > 100) {
                  this.data.push(streams[i]);
                }
              }
            }
            console.log(this.data);
          }).catch((error) => {
          if(response) {
            console.log(error);
          }
        });
      },
    },
  }
</script>
