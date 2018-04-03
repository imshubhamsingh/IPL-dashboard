/* eslint-disable no-trailing-spaces */
import Vue from 'vue';
import Vuex from 'vuex';

import teams from './teams.json';
import season from './seasons.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    teams,
    season
  },
  getters: {
    teamDetails: state => state.teams,
    seasonDetails: state => state.season,
    particularSeason: state => (year) => {
      const currSeason = state.season.filter(s => s.year === parseInt(year, 10));
      return { ...currSeason[0] };
    }
  }
});

