<template>
  <div id="home">
    <div class="content">
      <!--<div class="top-map">-->
        <!--<span class="top-text">Matches Played Across Different Cities</span>-->
        <!--<div class="top-content">-->
          <!--<app-map class="map"/>-->
        <!--</div>-->
      <!--</div>-->
      <div class="teams">
        <span class="top-text">Teams</span>
        <div class="team-scroll">
          <div class="team-list">
            <app-teams v-for="team in teams" :team="team" :key="team.short"/>
          </div>
        </div>

      </div>
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
  import AppTeams from '../../UIComponents/Teams';

  export default {
    components: {
      YearCard,
      AppMap,
      AppTeams
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
        ],
        teams: [
          {
            image: 'static/img/team-logo/Kolkata_Knight_Riders.png',
            name: 'Kolkata Knight Riders',
            photo: 'static/img/team-photo/Kolkata_Knight_Riders.jpg',
            short: 'KKR',
            width: '72px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #3B2667F1 10%, #BC78ECC1 100%)',
            totalMatches: [13, 13, 14, 15, 17, 16, 16, 13, 15],
            totalMatchesWon: [6, 3, 7, 8, 12, 6, 11, 7, 8],
            tie: {
              win: 0,
              lose: 2
            }
          },
          {
            image: 'static/img/team-logo/Royal_Challengers_Bangalore.png',
            name: 'Royal Challenges Bangalore',
            photo: 'static/img/team-photo/Royal_Challengers_Bangalore.jpg',
            short: 'RCB',
            width: '80px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #f3ab00f7 10%, #f9de8cb5 100%)',
            totalMatches: [14, 16, 16, 16, 15, 16, 14, 16, 16],
            totalMatchesWon: [4, 9, 8, 10, 8, 9, 5, 8, 9],
            tie: {
              win: 1,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Chennai_Super_Kings_Logo.png',
            name: 'Chennai Super Kings',
            photo: 'static/img/team-photo/Chennai_Super_Kings.jpg',
            short: 'CSK',
            width: '121px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FDEB71F1 10%, #F8D800C1 100%)',
            totalMatches: [16, 14, 16, 16, 18, 18, 16, 17, 0],
            totalMatchesWon: [9, 8, 9, 11, 10, 12, 10, 10, 0],
            tie: {
              win: 0,
              lose: 1
            }
          },
          {
            image: 'static/img/team-logo/Kings_XI_Punjab.png',
            name: 'King XI Punjab',
            photo: 'static/img/team-photo/Kings_XI_Punjab.jpg',
            short: 'KXIP',
            width: '94px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #e01111f1 10%, #945a5ac1 100%)',
            totalMatches: [15, 14, 14, 14, 16, 16, 17, 14, 14],
            totalMatchesWon: [10, 7, 4, 7, 8, 8, 12, 3, 4],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Rajasthan_Royals.png',
            name: 'Rajasthan Royals',
            photo: 'static/img/team-photo/Rajasthan_Royals.jpg',
            short: 'RR',
            width: '120px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #6B73FFF1 10%, #000DFFC1 100%)',
            totalMatches: [16, 13, 14, 13, 16, 18, 14, 14, 0],
            totalMatchesWon: [13, 6, 6, 6, 7, 11, 7, 7, 0],
            tie: {
              win: 0,
              lose: 1
            }
          },
          {
            image: 'static/img/team-logo/Delhi_Daredevils.png',
            name: 'Delhi Daredevils',
            photo: 'static/img/team-photo/Delhi_Daredevils.jpg',
            short: 'DD',
            width: '200px',
            marginTop: '16px',
            color: 'linear-gradient( 135deg, #ff2924f2 10%, #c02826c7 100%)',
            totalMatches: [14, 15, 14, 14, 18, 16, 14, 14, 14],
            totalMatchesWon: [7, 10, 7, 4, 11, 3, 2, 5, 7],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Mumbai_Indians.png',
            name: 'Mumbai Indians',
            photo: 'static/img/team-photo/Mumbai_Indians.jpg',
            short: 'MI',
            width: '150px',
            marginTop: '12px',
            color: 'linear-gradient( 135deg, #52E5E7F1 10%, #130CB7C1 100%)',
            totalMatches: [14, 13, 16, 16, 17, 19, 15, 16, 14],
            totalMatchesWon: [7, 5, 11, 10, 10, 13, 7, 10, 7],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Deccan_Chargers.png',
            name: 'Deccan Chargers',
            photo: 'static/img/team-photo/Deccan_Chargers.jpg',
            short: 'DC',
            width: '100px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #97ABFFF1 10%, #123597C1 100%)',
            totalMatches: [14, 16, 16, 14, 15, 0, 0, 0, 0],
            totalMatchesWon: [2, 9, 8, 6, 4, 0, 0, 0, 0],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Kochi_Tuskers_Kerala.png',
            name: 'Kochi Tuskers Kerala',
            photo: 'static/img/team-photo/Kochi_Tuskers_Kerala.jpg',
            short: 'KTK',
            width: '127px',
            marginTop: '11px',
            color: 'linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)',
            totalMatches: [0, 0, 0, 14, 0, 0, 0, 0, 0],
            totalMatchesWon: [0, 0, 0, 6, 0, 0, 0, 0, 0],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Pune_Warrior.png',
            name: 'Pune Warrior',
            photo: 'static/img/team-photo/Pune_Warrior.jpg',
            short: 'PW',
            width: '200px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #bdbdbdeb 10%, #000000eb 100%)',
            totalMatches: [0, 0, 0, 14, 16, 16, 0, 0, 0],
            totalMatchesWon: [0, 0, 0, 4, 4, 4, 0, 0, 0],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Sunrisers_Hyderabad.png',
            name: 'Sunrisers Hyderabad',
            photo: 'static/img/team-photo/Sunrisers_Hyderabad.jpg',
            short: 'SH',
            width: '150px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FD6E6AF1 10%, #FFC600C1 100%)',
            totalMatches: [0, 0, 0, 0, 0, 17, 14, 14, 17],
            totalMatchesWon: [0, 0, 0, 0, 0, 10, 6, 7, 11],
            tie: {
              win: 1,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Rising_Pune_Supergiant.png',
            name: 'Rising Pune Supergiant',
            photo: 'static/img/team-photo/Rising_Pune_Supergiant.jpg',
            short: 'RPS',
            width: '205px',
            marginTop: '23px',
            color: 'linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)',
            totalMatches: [0, 0, 0, 0, 0, 0, 0, 0, 14],
            totalMatchesWon: [0, 0, 0, 0, 0, 0, 0, 0, 5],
            tie: {
              win: 0,
              lose: 0
            }
          },
          {
            image: 'static/img/team-logo/Gujarat_Lions.png',
            name: 'Gujarat Lions',
            photo: 'static/img/team-photo/Gujarat_Lions.jpg',
            short: 'GL',
            width: '90px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FCCF31F1 10%, #F55555C1 100%)',
            totalMatches: [0, 0, 0, 0, 0, 0, 0, 0, 16],
            totalMatchesWon: [0, 0, 0, 0, 0, 0, 0, 0, 9],
            tie: {
              win: 0,
              lose: 0
            }
          }
        ]
      };
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
      & .teams{
        width: 100%;
        overflow-x: hidden;
        & .top-text{
          @extend %text;
          font-weight: 700;
          font-size: 50px;
          background: linear-gradient( 135deg, #70F570 10%, #49C628 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        & .team-scroll {
          display: block;
          width: 100%;
          height: 383px;
          overflow-y: hidden;
          overflow-x: scroll;
          white-space: nowrap;
          margin-bottom: 21px;
          border-radius: 5px;
          & .team-list{
            overflow: hidden;
            float: left;
          }
        }
      }
      & .top-map{
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
