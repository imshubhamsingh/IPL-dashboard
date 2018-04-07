/* eslint-disable no-trailing-spaces */
import Vue from 'vue';
import Vuex from 'vuex';


import teams from './teams.json';
import season from './seasons.json';
import batsmen from './batsmen.json';
import bowler from './bowlers.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams,
    season,
    batsmen,
    bowler
  },
  getters: {
    teamDetails: state => state.teams,
    seasonDetails: state => state.season,
    particularSeason: state => (year) => {
      const currSeason = state.season.filter(s => s.year === parseInt(year, 10));
      return { ...currSeason[0] };
    },
    particularSeasonTopBatsMen: state => year => state.batsmen[year],
    particularSeasonTopOverBowled: state => year => state.bowler[year]
  }
});

