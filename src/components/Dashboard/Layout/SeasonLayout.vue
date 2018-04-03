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
      <div>
        <div class="season-scroll">
          <div class="info-list">
            <div class="season-card">
              <div class="card">
                <div class="season-card-front">
                  <div class="content" :style="{'background': 'red'}">
                    <div class="text">

                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
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
  import geocoder from 'geocoder-geojson';
  import YearCard from '../../UIComponents/YearCard';

  export default {
    name: 'SeasonLayout',
    components: {
      YearCard
    },
    data() {
      return {
        seasonDetail: this.$store.getters.particularSeason(this.$route.params.year) || '',
        info: this.$store.getters.seasonDetails || '',
        places: []
      };
    },
    watch: {
      $route(to) {
        this.seasonDetail = this.$store.getters.particularSeason(to.params.year);
      },
      seasonDetail(val) {
        this.updatePlaces(val.places);
      }
    },
    mounted() {
      this.updatePlaces(this.seasonDetail.places);
    },
    computed: {
      style() {
        return `background: linear-gradient(45deg, #2b2b2b, ${this.seasonDetail.backgroundColor.slice(25, 32)})`;
      }
    },
    methods: {
      updatePlaces(val) {
        this.places = [];
        const vm = this;
        val.map(place => geocoder.google(`${place.Venue_Name}, ${place.City_Name}, ${place.Host_Country}`).then((res) => {
          vm.places.push({
            lat: res.features[0].geometry.coordinates[0],
            lng: res.features[0].geometry.coordinates[1]
          });
        }));
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
  %season-card {
    width: 316px;
    height: 381px;
    border-radius: 5px;
    display: inline-block;
    cursor: pointer;
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 10px 0 0;
    background-size: cover;
    color: #fff;
    text-align: center;
    text-rendering: optimizeLegibility;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    perspective: 500px;
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

      & .season-scroll {
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
        & .info-list {
          overflow: hidden;
          float: left;
          .season-card {
            @extend %season-card;
            & .card {
              position: relative;
              transform-style: preserve-3d;
              transition: .5s ease;

              & .seasoon-card-front {
                width: 316px;
                height: 381px;
                position: absolute;
                top: 0;
                bottom: 0;
                backface-visibility: hidden;
                overflow: hidden;
                & .content {
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
