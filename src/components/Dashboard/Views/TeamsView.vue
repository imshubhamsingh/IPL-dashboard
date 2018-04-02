<template>
  <div>
    <div class="team-scroll">
      <div class="team-list">
        <team-card v-for="team in teams" :team="team" :key="team.short"/>
      </div>
    </div>
  </div>
</template>

<script>
  import TeamCard from '../../UIComponents/TeamCard';

  export default {
    components: {
      TeamCard
    },
    data() {
      return {
        teams: null
      };
    },
    mounted() {
      this.teams = this.$store.getters.teamDetails;
    }
  };
</script>

<style lang="scss" scoped>
  %text {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    color: white;
  }
  .team-scroll {
    display: block;
    width: 100%;
    height: 381px;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin-bottom: 21px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    & .team-list {
      overflow: hidden;
      float: left;
    }
  }
</style>
