<!--<template>-->
   <!--<div>-->
     <!--<div class="top-map" style="padding: 10px">-->
       <!--<span class="top-text">Matches Played Across Different Cities</span>-->
       <!--<div class="top-content">-->
         <!--<app-map class="map"/>-->
       <!--</div>-->
     <!--</div>-->
     <!--<div id="home" :style="{background: seasonDetail.backgroundColor}">-->
       <!--<div class="year">-->
         <!--{{seasonDetail.year}}-->
       <!--</div>-->
     <!--</div>-->
   <!--</div>-->
<!--</template>-->


<template>
  <div id="home">
    <div class="content">
      <div class="header">
        <router-link to="/" tag="div" active-class="activeLink" exact class="backHome">
          <i class="fa fa-chevron-circle-left"></i>
        </router-link>
        <div class="selected-year activeLink">
          <span :style="{'z-index': '4','position': 'relative'}">{{seasonDetail.year.toString()}}</span>
          <div class="box" :style="style"></div>
        </div>
      </div>

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
    name: 'SeasonLayout',
    components: {
      YearCard
    },
    data() {
      return {
        heading: ['Home'],
        seasonDetail: this.$store.getters.particularSeason(this.$route.params.year) || '',
        info: null
      };
    },
    watch: {
      $route(to) {
        this.seasonDetail = this.$store.getters.particularSeason(to.params.year);
      }
    },
    mounted() {
      this.info = this.$store.getters.seasonDetails;
    },
    computed: {
      style() {
        return `background: linear-gradient(45deg, #2b2b2b, ${this.seasonDetail.backgroundColor.slice(25, 32)})`;
      }
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
  }
  #home {
    padding: 10px;
    & .content {
      margin: auto 0;
      width: 100%;
      & .header{
        display: flex;
        height: 83px;
        .backHome {
          @extend %text;
          font-size: 73px;
          height: 83px;
          line-height: 34px;
          padding: 5px 20px;
          cursor: pointer;
          transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
          color: #484848;
          position: relative;
          &:hover {
            color: white;
          }
          &.activeLink::before{
            content: '';
            width: 60%;
            height: 25px;
            background: linear-gradient(45deg, #2b2b2b, #e86c9a);
          }
        }
        .selected-year {
          @extend %text;
          font-weight: 700;
          font-size: 50px;
          cursor: pointer;
          color: white;
          position: relative;
          transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
          & .box{
            width: 235%;
            height: 41px;
            position: absolute;
            left: 0;
            bottom: 0;
          }
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
