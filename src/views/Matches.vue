<template>
  <ion-content id="content" class="ion-page content-bg content-offset ion-text-center">
    <div class="match">
      <tabs class="" :defaultIndex="1">
        <tab title="Upcoming">
          <div v-for="upcomingMatch in upcomingMatches" class="match_teams">
            <div class="match_team__info">
              <span>{{ upcomingMatch.opponents[0].opponent.name }}</span>
              <img :src="upcomingMatch.opponents[0].opponent.image_url" :alt="upcomingMatch.opponents[0].opponent.name">
            </div>
            <div class="match-vs">
              <div class="match-vs_tournament">{{ upcomingMatch.league.name }} <span>{{ upcomingMatch.tournament.name }}</span></div>
              <div class="match-vs_time">{{ upcomingMatch.begin_at | moment("HH:mm") }}</div>
              <div class="match-vs_date">{{ upcomingMatch.begin_at | moment("D MMM") }}</div>
            </div>
            <div class="match_team__info">
              <span>{{ upcomingMatch.opponents[1].opponent.name }}</span>
              <img :src="upcomingMatch.opponents[1].opponent.image_url" :alt="upcomingMatch.opponents[0].opponent.name">
            </div>
          </div>
        </tab>
        <tab title="Live">
          <div v-for="liveMatch in liveMatches" class="match_teams">
            <div class="match_team__info">
              <span>{{ liveMatch.opponents[0].opponent.name }}</span>
              <img :src="liveMatch.opponents[0].opponent.image_url" :alt="liveMatch.opponents[0].opponent.name">
            </div>
            <div class="match-vs">
              <div class="match-vs_tournament">{{ liveMatch.league.name }} <span>{{ liveMatch.tournament.name }}</span></div>
              <div class="match-vs_vs" v-if="liveMatch.games[0].status === 'running' && liveMatch.games[0].winner.id === null" >VS</div>
              <div class="match-vs_vs" v-else>{{ liveMatch.results[0].score }} <small>-</small> {{ liveMatch.results[1].score }}</div>
              <div  class="match-vs_live">
                <svg xmlns="http://www.w3.org/2000/svg" width="1rem" viewBox="0 0 200 200"><circle cx="100" cy="100" r="50" fill="red"></circle></svg>
                LIVE
              </div>
            </div>
            <div class="match_team__info">
              <span>{{ liveMatch.opponents[1].opponent.name }}</span>
              <img :src="liveMatch.opponents[1].opponent.image_url" :alt="liveMatch.opponents[0].opponent.name">
            </div>
          </div>
        </tab>
        <tab title="Past">
          <div v-for="pastMatch in pastMatches" class="match_teams">
            <div class="match_team__info">
              <span>{{ pastMatch.opponents[0].opponent.name }}</span>
              <img :src="pastMatch.opponents[0].opponent.image_url" :alt="pastMatch.opponents[0].opponent.name">
            </div>
            <div class="match-vs">
              <div class="match-vs_tournament">{{ pastMatch.league.name }} <span>{{ pastMatch.tournament.name }}</span></div>
              <div class="match-vs_vs">{{ pastMatch.results[0].score }} <small>-</small> {{ pastMatch.results[1].score }}</div>
            </div>
            <div class="match_team__info">
              <span>{{ pastMatch.opponents[1].opponent.name }}</span>
              <img :src="pastMatch.opponents[1].opponent.image_url" :alt="pastMatch.opponents[0].opponent.name">
            </div>
          </div>
        </tab>
      </tabs>
    </div>
  </ion-content>
</template>

<script>
  import axios from 'axios';
  export default {
    name: "matches",
    data() {
      return {
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
    methods: {
      getLiveMatches() {
        axios.get('http://api.gamestreamtv.ru/json/dota2/matches/live/?token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.liveMatches = response.data.slice(0,9);
            console.log(this.liveMatches);
          }).catch((error) => { console.log(error); });
      },
      getUpcomingMatches() {
        axios.get('http://api.gamestreamtv.ru/json/dota2/matches/upcoming/?token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.upcomingMatches = response.data.slice(0,9);
          }).catch((error) => { console.log(error); });
      },
      getPastMatches() {
        axios.get('http://api.gamestreamtv.ru/json/dota2/matches/past/?token=8J8JAQ6t4CMqaTiu2FWZxOnJTnWbO9gCCUeq')
          .then((response) => {
            this.pastMatches = response.data.slice(0,9);
          }).catch((error) => { console.log(error); });
      },
    }
  };
</script>
