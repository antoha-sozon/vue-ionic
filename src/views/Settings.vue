<template>
  <ion-content id="content" class="ion-page ion-padding content-bg content-offset ion-text-center">
    <div
      class="hacker-news-item"
      v-for="(item, $index) in list"
      :key="$index"
      :data-num="$index + 1">
      <a target="_blank" :href="item.url" v-text="item.title"></a>
      <p>
        <span v-text="item.points"></span>
        points by
        <a
          target="_blank"
          :href="`https://news.ycombinator.com/user?id=${item.author}`"
          v-text="item.author"></a>
        |
        <a
          target="_blank"
          :href="`https://news.ycombinator.com/item?id=${item.objectID}`"
          v-text="`${item.num_comments} comments`"></a>
      </p>
    </div>

    <infinite-loading @infinite="infiniteHandler"></infinite-loading>
  </ion-content>
</template>

<script>
  import axios from 'axios';
  import InfiniteLoading from 'vue-infinite-loading';
  const api = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  export default {
    name: 'Settings',
    components: {
      InfiniteLoading,
    },
    data() {
      return {
        page: 1,
        list: [],
      };
    },
    methods: {
      infiniteHandler($state) {
        axios.get(api, {
          params: {
            page: this.page,
          },
        }).then(({ data }) => {
          if (data.hits.length) {
            this.page += 1;
            this.list.push(...data.hits);
            $state.reset();
          } else {
            $state.complete();
          }
        });
      },
    },
  }
</script>
