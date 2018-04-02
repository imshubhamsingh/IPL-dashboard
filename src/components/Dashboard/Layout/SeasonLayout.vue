<template>
  <div id="home">
    <div class="content">
      <!--<div class="top-map">-->
      <!--<span class="top-text">Matches Played Across Different Cities</span>-->
      <!--<div class="top-content">-->
      <!--<app-map class="map"/>-->
      <!--</div>-->
      <!--</div>-->
      <router-view></router-view>
    </div>

    <div class="bottom">
      <span class="bottom-text">Seasons</span>
      <div class="bottom-scroll">
        <div class="year">
          <year-card v-for="data in info" :year="data.year" :match-played="data.matchPlayed" :background-color="data.backgroundColor" :key="data.year"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import YearCard from '../../UIComponents/YearCard';
  import AppMap from '../../UIComponents/Map';

  export default {
    name: 'HomeLayout',
    components: {
      YearCard,
      AppMap
    },
    data() {
      return {
        info: [
          { year: 2008, backgroundColor: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)', matchPlayed: 58 },
          { year: 2009, backgroundColor: 'linear-gradient( 135deg, #43CBFF 10%, #9708CC 100%)', matchPlayed: 57 },
          { year: 2010, backgroundColor: 'linear-gradient( 135deg, #5EFCE8 10%, #736EFE 100%)', matchPlayed: 60 },
          { year: 2011, backgroundColor: 'linear-gradient( 135deg, #52E5E7 10%, #130CB7 100%)', matchPlayed: 72 },
          { year: 2012, backgroundColor: 'linear-gradient( 135deg, #FDD819 10%, #E80505 100%)', matchPlayed: 74 },
          { year: 2013, backgroundColor: 'linear-gradient( 135deg, #FF7AF5 10%, #513162 100%)', matchPlayed: 76 },
          { year: 2014, backgroundColor: 'linear-gradient( 135deg, #FF96F9 10%, #C32BAC 100%)', matchPlayed: 60 },
          { year: 2015, backgroundColor: 'linear-gradient( 135deg, #F761A1 10%, #8C1BAB 100%)', matchPlayed: 57 },
          { year: 2016, backgroundColor: 'linear-gradient( 135deg, #FCCF31 10%, #F55555 100%)', matchPlayed: 60 }
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  $break-small: 320px;
  $break-medium: 425px;
  $break-large: 1200px;
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');

  body {
    background: #2b2b2b;
    height: 100%;
  }
  #app {
    padding: 10px;
  }
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
