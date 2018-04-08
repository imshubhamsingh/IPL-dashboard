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
              <div class="awards">
                    <span class="top-text">Awards</span>
                    <div class="top-content">
                      <div class="orange-cap">
                        <div class="title">Orange Cap</div>
                        <span style="font-size: 20px;">{{this.seasonDetail.awards.Orange_Cap.name}}</span>
                        <span>
                          <span style="margin-right: 10px;">Matches: {{this.seasonDetail.awards.Orange_Cap.matches}}</span>
                          <span>Runs: {{this.seasonDetail.awards.Orange_Cap.runs}}</span>
                        </span>
                      </div>
                      <div class="purple-cap">
                        <div class="title">Purple Cap</div>
                        <span style="font-size: 20px;">{{this.seasonDetail.awards.Purple_Cap.name}}</span>
                        <span>
                          <span style="margin-right: 10px;">Matches: {{this.seasonDetail.awards.Purple_Cap.matches}}</span>
                          <span>Wickets: {{this.seasonDetail.awards.Purple_Cap.wickets}}</span>
                        </span>
                      </div>
                      <div class="maximum-sixes">
                        <div class="title">Maximum Sixes</div>
                        <span style="font-size: 20px;">{{this.seasonDetail.awards.Maximum_Sixes.name}}</span>
                        <span>
                          <span style="margin-right: 10px;"> Matches: {{this.seasonDetail.awards.Maximum_Sixes.matches}}</span>
                          <span>Sixes: {{this.seasonDetail.awards.Maximum_Sixes.sixes}}</span>
                        </span>
                      </div>
                    </div>
                  </div>
            </season-card>
            <season-card>
              <div class="season-result">
                <span class="top-text">SEASON RESULT</span>
                <div style="width: 245px;float: right;white-space: normal;">
                  <div class="winner">
                    <img
                      :src="`/static/img/team-logo/${this.seasonDetail.season_result[0].split(' ').join('_')}.png`"
                      style="width: 93px;margin-bottom: -112px;position: relative; z-index: 2"
                    />
                    <span class="first">1st</span>
                    <div>
                      {{this.seasonDetail.season_result[0]}}
                    </div>
                  </div>
                  <div class="runner-up">
                    <img
                      :src="`/static/img/team-logo/${this.seasonDetail.season_result[1].split(' ').join('_')}.png`"
                      style="width: 73px;margin-bottom: -112px;position: relative; z-index: 2"
                    />
                    <span class="second">2nd</span>
                    <div>
                      {{this.seasonDetail.season_result[1]}}
                    </div>
                  </div>

                </div>

              </div>
            </season-card>
            <season-card>
              <div class="match-details">
                <span class="top-text">Match Detaials</span>
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
    .awards {
      overflow: hidden;
      height: 100%;
      z-index: 2;
      padding: 13px;
      & span{
        @extend %text;
        font-size: 12px;
        font-weight: 700;
      }
      & .top-text{
        @extend %text;
        font-size: 49px;
        font-weight: 700;
      }
      & .orange-cap{
        @extend %text;
        font-size: 28px;
        text-align: left;
        font-weight: 700;
        color: orange;
        display: flex;
        flex-direction: column;
        padding: 11px 0;
        & .title {
          padding-bottom: 2px;
        }
      }
      & .purple-cap {
          @extend %text;
          font-size: 28px;
          text-align: left;
          font-weight: 700;
          color: #ab32ab;
          display: flex;
          flex-direction: column;
          padding: 11px 0;
          & .title {
           padding-bottom: 2px;
         }
      }
      & .maximum-sixes {
        @extend %text;
        font-size: 28px;
        text-align: left;
        font-weight: 700;
        color: #e45c96;
        display: flex;
        flex-direction: column;
        padding: 11px 0;
        & .title {
          padding-bottom: 2px;
        }
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
    .match-details {
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
        font-size: 31px;
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
