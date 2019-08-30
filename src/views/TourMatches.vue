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
    <tabs v-if="isLoading === false" :defaultIndex="0">
      <tab title="Upcoming">
        <div v-if="this.upcomingMatches.length === 0" class="match-no">No upcoming matches</div>
        <div v-cloak v-for="upcomingMatch in upcomingMatches" class="match_teams">
          <div v-if="upcomingMatch.opponents.length > 0" class="match_teams__info">
            <div v-for="opponents in upcomingMatch.opponents" class="match_team__info">
              <img :src="opponents.opponent.image_url" :alt="opponents.opponent.name">
              <span>{{ opponents.opponent.name }}</span>
            </div>
          </div>
          <div v-if="upcomingMatch.opponents.length === 1" class="match_teams__info">
            <div v-for="opponents in upcomingMatch.opponents" class="match_team__info">
              <img :src="opponents.opponent.image_url" :alt="opponents.opponent.name">
              <span>{{ opponents.opponent.name }}</span>
            </div>
            <div class="match_team__info">
              <img src="../assets/img/dota_logo.svg" alt="TBD">
              <span>TBD</span>
            </div>
          </div>
          <div v-if="upcomingMatch.opponents.length === 0" class="match_teams__info">
            <div class="match_team__info">
              <img src="../assets/img/dota_logo.svg" alt="TBD">
              <span>TBD</span>
            </div>
            <div class="match_team__info">
              <img src="../assets/img/dota_logo.svg" alt="TBD">
              <span>TBD</span>
            </div>
          </div>
          <div class="match-vs">
            <div class="match-vs_time">{{ upcomingMatch.date_time | moment("HH:mm") }}</div>
            <div class="match-vs_date">{{ upcomingMatch.date_time | moment("D MMM") }}</div>
          </div>
          <div class="match_tour__info">
            <small>{{ upcomingMatch.league }}</small>
            <h3>{{ upcomingMatch.serie }}</h3>
          </div>
        </div>
      </tab>
      <tab title="Live">
        <div v-if="this.liveMatches.length === 0" class="match-no">No live matches</div>
        <div v-cloak v-for="liveMatche in this.liveMatches" class="match_teams">
          <div v-if="liveMatche.opponents.length > 0" class="match_teams__info">
            <div v-for="opponents in liveMatche.opponents" class="match_team__info">
              <img :src="opponents.opponent.image_url" :alt="opponents.opponent.name">
              <span>{{ opponents.opponent.name }}</span>
            </div>
          </div>
          <div class="match-vs">
            <div v-if="liveMatche.opponents[0].opponent.id !== liveMatche.results[0].team_id"
                 v-for="score in liveMatche.results.slice().reverse()"
                 class="match-vs_score">
              <span>{{ score.score }}</span>
            </div>
            <div v-if="liveMatche.opponents[0].opponent.id === liveMatche.results[0].team_id"
                 v-for="score in liveMatche.results"
                 class="match-vs_score">
              <span>{{ score.score }}</span>
            </div>
          </div>
          <div class="match_tour__info">
            <small>{{ liveMatche.league }}</small>
            <h3>{{ liveMatche.serie }}</h3>
          </div>
        </div>
      </tab>
      <tab title="Past">
        <div v-if="this.pastMatches.length === 0" class="match-no">No live matches</div>
        <div v-cloak v-for="pastMatche in this.pastMatches" class="match_teams">
          <div v-if="pastMatche.opponents.length > 0" class="match_teams__info">
            <div v-for="opponents in pastMatche.opponents" class="match_team__info">
              <img :src="opponents.opponent.image_url" :alt="opponents.opponent.name">
              <span>{{ opponents.opponent.name }}</span>
            </div>
          </div>
          <div class="match-vs">
            <div v-if="pastMatche.opponents[0].opponent.id !== pastMatche.results[0].team_id"
                 v-for="score in pastMatche.results.slice().reverse()"
                 class="match-vs_score">
              <span>{{ score.score }}</span>
            </div>
            <div v-if="pastMatche.opponents[0].opponent.id === pastMatche.results[0].team_id"
                 v-for="score2 in pastMatche.results"
                 class="match-vs_score">
              <span>{{ score2.score }}</span>
            </div>
          </div>
          <div class="match_tour__info">
            <small>{{ pastMatche.league }}</small>
            <h3>{{ pastMatche.serie }}</h3>
          </div>
        </div>
      </tab>
    </tabs>
  </div>
</template>

<script>
  import axios from 'axios';
  import { FulfillingBouncingCircleSpinner } from 'epic-spinners';

  export default {
    name: "TourMarches",
    data() {
      return {
        game: this.$route.params.game,
        isLoading: true,
        liveMatches: [],
        upcomingMatches: [],
        pastMatches: [],
      }
    },
    mounted () {
      this.getLiveMatches()
      this.getUpcomingMatches()
      this.getPastMatches()
    },
    components: {
      FulfillingBouncingCircleSpinner
    },
    methods: {
      getLiveMatches() {
        axios.get('http://api.gamestreamtv.ru/json/' + this.game + '/matches/live/?max-game=10&token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.liveMatches = response.data;
            setTimeout(() => this.isLoading = false, 1000);
          }).catch((error) => { console.log(error); });
      },
      getUpcomingMatches() {
        axios.get('http://api.gamestreamtv.ru/json/' + this.game + '/matches/upcoming/?max-game=10&token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.upcomingMatches = response.data;
            setTimeout(() => this.isLoading = false, 1000);
          }).catch((error) => { console.log(error); });
      },
      getPastMatches() {
        axios.get('http://api.gamestreamtv.ru/json/' + this.game + '/matches/past/?max-game=10&token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.pastMatches = response.data;
            console.log(this.pastMatches);
            setTimeout(() => this.isLoading = false, 1000);
          }).catch((error) => { console.log(error); });
      },
    }
  };
</script>
