<template>
  <div id="home">
    <div class="content">
      <!--<div class="top-map">-->
        <!--<span class="top-text">Matches Played Across Different Cities</span>-->
        <!--<div class="top-content">-->
          <!--<app-map class="map"/>-->
        <!--</div>-->
      <!--</div>-->
      <div class="header">
        <router-link to="/" tag="a" active-class="activeLink" exact class="teams">
          <span v-for="i in heading[0].length" :style="{'z-index': '4','position': 'relative'}">{{heading[0].charAt(i-1)}}</span>
        </router-link>
        <router-link to="/batsmen" tag="a" active-class="activeLink" class="batsmen">
          <span v-for="i in heading[1].length" :style="{'z-index': '4','position': 'relative'}">{{heading[1].charAt(i-1)}}</span>
        </router-link>
        <router-link to="/bowlers" tag="a" active-class="activeLink" class="bowlers">
          <span v-for="i in heading[2].length" :style="{'z-index': '4','position': 'relative'}">{{heading[2].charAt(i-1)}}</span>
        </router-link>
      </div>

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
      .teams {
        @extend %text;
        font-weight: 700;
        font-size: 50px;
        cursor: pointer;
        transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
        color: #484848;
        position: relative;
        &::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #444343);
          position: absolute;
          left: 0;
          bottom: 0;
          transform-origin: 0 0;
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          transform: scale3d(1,1,1);
        }
        &:hover::before{
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          background: linear-gradient(45deg, #2b2b2b, #f8ae2c);
          transform: scale3d(1.2,1,1);
        }
        &.activeLink {
          color: white;
        }
        &.activeLink::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #e86c9a);
        }
      }
      .batsmen {
        @extend %text;
        font-weight: 700;
        font-size: 50px;
        cursor: pointer;
        color: #484848;
        position: relative;
        transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
        &::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #444343);
          position: absolute;
          left: 0;
          bottom: 0;
          transform-origin: 0 0;
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          transform: scale3d(1,1,1);
        }
        &:hover::before{
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          transform: scale3d(1.2,1,1);
          background: linear-gradient(45deg, #2b2b2b, #07d89d);
        }

        &.activeLink {
          color: white;
        }
        &.activeLink::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #07d89d);
        }
      }
      .bowlers {
        @extend %text;
        font-weight: 700;
        font-size: 50px;
        cursor: pointer;
        color: #484848;
        position: relative;
        transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
        &::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #444343);
          position: absolute;
          left: 0;
          bottom: 0;
          transform-origin: 0 0;
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          transform: scale3d(1,1,1);
        }
        &:hover::before{
          transition: transform 0.8s cubic-bezier(0.2,1,0.3,1);
          background: linear-gradient(45deg, #2b2b2b, #e86c9a);
          transform: scale3d(1.2,1,1);
        }
        &.activeLink {
          color: white;
        }
        &.activeLink::before{
          content: '';
          width: 60%;
          height: 25px;
          background: linear-gradient(45deg, #2b2b2b, #e86c9a);
        }
      }
      .top-map{
        @media screen and (max-width: $break-medium) {
          text-align: center;
        }
        & .top-text{
          @extend %text;
          font-weight: 700;
        }
        & .map {
          @media screen and (min-width: $break-medium){
            width: 120%;
          }
        }
      }
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
