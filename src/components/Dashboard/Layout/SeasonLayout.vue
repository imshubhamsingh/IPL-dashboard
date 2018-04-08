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
                    <div class="placeDetails">
                          <span class="top-text">Matches Played Across Different Cities</span>
                          <div class="top-content">
                            <map-card class="map" :places="this.seasonDetail.places"/>
                          </div>
                    </div>
            </season-card>
            <season-card>
              <season-awards :awards="this.seasonDetail.awards"/>
            </season-card>
            <season-card>
              <season-result :result="this.seasonDetail.season_result" />
            </season-card>
            <season-card>
              <season-details :details="this.seasonDetail.match_details" />
            </season-card>
          </div>
     </div>
   </div>
</template>

<script>
  import MapCard from '../../UIComponents/MapCard';
  import SeasonCard from '../../UIComponents/SeasonCard';
  import SeasonAwards from '../../UIComponents/SeasonAwards';
  import SeasonDetails from '../../UIComponents/SeasonDetails';
  import SeasonResult from '../../UIComponents/SeasonResult';

  export default {
    name: 'SeasonLayout',
    components: {
      MapCard,
      SeasonCard,
      SeasonAwards,
      SeasonDetails,
      SeasonResult
    },
    data() {
      return {
        seasonDetail: this.$store.getters.particularSeason(this.$route.params.year) || '',
        date: '',
        selectedMatchDetails: ''
      };
    },
    watch: {
      $route(to) {
        this.seasonDetail = this.$store.getters.particularSeason(to.params.year);
        this.date = '';
      }
    },
    computed: {
      style() {
        return `background: linear-gradient(45deg, #2b2b2b, ${this.seasonDetail.backgroundColor.slice(25, 32)})`;
      }
    },
    methods: {
      getMatchDetails() {
        this.selectedMatchDetails = this.seasonDetail.match_details[this.date];
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
    margin-left: -43px;
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
      & .box {
        width: 235%;
        height: 21px;
        position: absolute;
        left: 0;
        bottom: 18px;
        transition: all 0.8s cubic-bezier(0.2,1,0.3,1);
        &:hover{
          width: 300%;
        }
        @media only screen and (max-width: $break-medium){
          width: 50%;
          &:hover{
            width: 75%;
          }
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
    }
    .placeDetails {
      overflow: hidden;
      height: 100%;
      z-index: 2;
      & span{
        @extend %text;
        font-size: 12px;
        font-weight: 700;
      }
    }
    .season-result {
      overflow: hidden;
      height: 368px;
      z-index: 2;
      padding: 13px;
      position: relative;
      top: 0;
      left: -6px;
      @extend %text;
      & span{
        font-size: 12px;
        font-weight: 700;
      }
      & .top-text{
        @extend %text;
        font-size: 45px;
        font-weight: 700;
        display:block;
        position: relative;
        -webkit-transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
        top: 172px;
        color: #505050;
        left: -127px;
      }
      & .winner{
        margin-top: -62px;
        position: absolute;
        & .first{
          font-size: 141px;
          color: #40b9e74d;
          top: 0;
        }
        & div {
          margin: -81px 0px;
          font-size: 22px;
          font-weight: 700;
        }

      }
      & .runner-up{
        margin-top: 105px;
        position: absolute;
        & .second{
          font-size: 100px;
          color: #31566442;
          top: 0;
        }
        & div {
          margin: -27px 0px;
          font-size: 17px;
          font-weight: 700;
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
