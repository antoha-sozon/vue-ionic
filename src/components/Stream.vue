<template>
  <div class="stream_page">
    <h1><svg xmlns="http://www.w3.org/2000/svg" width="2rem" viewBox="0 0 200 200"><circle cx="100" cy="100" r="50" fill="red"></circle></svg> Stream by {{ this.data.user_name }}</h1>
    <div class="stream_page_player">
      <iframe :src="'https://player.twitch.tv/?volume=0.5&muted&channel=' + this.data.user_name" frameborder="0"></iframe>
    </div>
    <div class="stream_page_info">
      <h3>{{ this.data.title }}</h3>
      <p>Language: <span>{{ this.data.language }}</span></p>
      <p>Viewers <span>{{ this.data.viewer_count }}</span></p>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    name: 'stream',
    data() {
      return {
        data: [],
        streamName: this.$route.params.name,
      }
    },
    mounted () {
      this.getStreamInfo();
    },
    methods: {
      getStreamInfo() {
        axios.get('http://api.gamestreamtv.ru/parsers/user_stream.php?user_name=' + this.streamName)
          .then((response) => {
            if(response) {
              this.data = response.data.data[0];
              console.log(this.data);
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
