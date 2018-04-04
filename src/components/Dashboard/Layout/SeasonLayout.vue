<template>
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
     <div class="season-scroll">
          <div class="info-list">
            <season-card>
                    <div class="placeDetials">
                      <div class="text">
                        <div class="top-map" style="padding: 10px">
                          <span class="top-text">Matches Played Across Different Cities</span>
                          <div class="top-content">
                            <map-card class="map" :places="this.seasonDetail.places"/>
                          </div>
                        </div>
                      </div>
                    </div>
            </season-card>
          </div>
     </div>
   </div>
</template>

<script>
  import MapCard from '../../UIComponents/MapCard';
  import SeasonCard from '../../UIComponents/SeasonCard';

  export default {
    name: 'SeasonLayout',
    components: {
      MapCard,
      SeasonCard
    },
    data() {
      return {
        seasonDetail: this.$store.getters.particularSeason(this.$route.params.year) || '',
      };
    },
    watch: {
      $route(to) {
        this.seasonDetail = this.$store.getters.particularSeason(to.params.year);
      }
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
  .header{
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
        height: 21px;
        position: absolute;
        left: 0;
        bottom: 18px;
        transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
        &:hover{
          width: 300%;
        }
      }
    }
  }
  .season-scroll {
    display: block;
    width: 100%;
    height: 381px;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin-bottom: 18px;
    border-radius: 5px;
    position: relative;
    z-index: 2;
    & .info-list {
      overflow: hidden;
      float: left;
      & .placeDetails {
        overflow: hidden;
        height: 100%;
        z-index: 2;
        & .logo {
          height: 101px;
          padding: 13px;
          object-fit: cover;
        }
        & .text {
          z-index: 3;
          & .team-name {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 23px;
            font-weight: 700;
            color: #ffffff;
            white-space: initial;
            width: 100%;
            margin-top: 30px;
          }
        }
        & .white-box {
          background: white;
          width: 153%;
          height: 159px;
          position: absolute;
          bottom: -26px;
          left: -24px;
          -webkit-transform: rotate(-19deg);
          transform: rotate(-19deg);
          z-index: 1;
        }
        & .best-result {
          display: flex !important;
          justify-content: space-around;
          & .text {
            margin-left: 161px;
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 23px;
            display: flex;
            flex-direction: column;
            font-weight: 700;
            color: #ffffff;
            white-space: initial;
            margin-top: 30px;
            .result {
              font-size: 67px;
              margin: -22px;
            }
            .year {
              font-size: 10px;
              margin-top: 8px;
            }
          }

        }
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
      font-size: 13px;
    }
    & .map {
      @media screen and (min-width: $break-medium){
        width: 100%;
      }
    }
  }
</style>
