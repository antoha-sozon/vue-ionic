<template>
  <h1>stream {{ this.streamName }}</h1>
</template>

<script>
  export default {
    name: 'stream',
    data() {
      return {
        streamName: this.$route.params.name,
      }
    },
  }
</script>
