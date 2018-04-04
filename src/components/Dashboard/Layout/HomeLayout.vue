<template>
  <div id="home">
    <div class="content">
      <router-view></router-view>
    </div>

    <div class="bottom">
      <span class="bottom-text">Seasons</span>
      <div class="bottom-scroll">
        <div class="year">
          <router-link :to="`/year/${data.year}`" v-for="data in info" :key="data.year">
            <year-card :year="data.year" :match-played="data.matchPlayed" :background-color="data.backgroundColor" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import YearCard from '../../UIComponents/YearCard';

  export default {
    name: 'HomeLayout',
    components: {
      YearCard
    },
    data() {
      return {
        heading: ['TEAMS', 'BATSMEN', 'BOWLERS'],
        info: null
      };
    },
    mounted() {
      this.info = this.$store.getters.seasonDetails;
    }
  };
</script>

<style lang="scss" scoped>
  $break-small: 320px;
  $break-medium: 425px;
  $break-large: 1200px;

  %text {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    color: white;
    text-decoration: none;
  }
  #home {
    padding: 10px;
    & .content {
      margin: auto 0;
      width: 100%;
    }
    .header{
      display: block;
      width: 100%;
      height: 59px;
      overflow-y: hidden;
      overflow-x: scroll;
      white-space: nowrap;
      margin-bottom: 21px;
      border-radius: 5px;
    }

    & .bottom {
      //position: absolute;
      //bottom: 0;
      margin: auto 0;
      width: 100%;
      //left: 50%;
      //transform: translateX(-50%);
      & .bottom-text {
        @extend %text;
        padding: 9px;
        font-size: 43px;
        font-weight: 700;
        background: linear-gradient( 135deg, #FFF720 10%, #3CD500 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      & .bottom-scroll {
        display: block;
        width: 100%;
        height: 200px;
        overflow-y: hidden;
        overflow-x: scroll;
        white-space: nowrap;
        margin-bottom: 21px;
        border-radius: 5px;
        & .year{
          overflow: hidden;
          float: left;
        }
      }
    }


  }
</style>
