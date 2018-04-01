<template>
  <div class="team-list">
    <div class="team-card" v-for="team in members" :style="style(team.photo)" >
      <div class="content" :style="{'background': team.color}">
        <div class="logo">
          <img :src="team.image" :alt="team.name" :width="team.width" :style="{'marginTop': team.marginTop}">
        </div>
        <div class="text">
            <div class="team-name">
              {{team.name}}
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'year-card',
    data() {
      return {
        title: 'Team members',
        members: [
          {
            image: 'static/img/team-logo/Chennai_Super_Kings_Logo.png',
            name: 'Chennai Super Kings',
            photo: 'static/img/team-photo/Chennai_Super_Kings.jpg',
            short: 'CSK',
            width: '121px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FDEB71F1 10%, #F8D800C1 100%)'
          },
          {
            image: 'static/img/team-logo/Deccan_Chargers.png',
            name: 'Deccan Chargers',
            photo: 'static/img/team-photo/Deccan_Chargers.jpg',
            short: 'DC',
            width: '100px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #97ABFFF1 10%, #123597C1 100%)'
          },
          {
            image: 'static/img/team-logo/Delhi_Daredevils.png',
            name: 'Delhi Daredevils',
            photo: 'static/img/team-photo/Delhi_Daredevils.jpg',
            short: 'DD',
            width: '200px',
            marginTop: '16px',
            color: 'linear-gradient(135deg , #e32a26 0%, #ffb199c1 100%)'
          },
          {
            image: 'static/img/team-logo/Gujarat_Lions.png',
            name: 'Gujarat Lions',
            photo: 'static/img/team-photo/Gujarat_Lions.jpg',
            short: 'GL',
            width: '90px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FCCF31F1 10%, #F55555C1 100%)'
          },
          {
            image: 'static/img/team-logo/Kings_XI_Punjab.png',
            name: 'King XI Punjab',
            photo: 'static/img/team-photo/Kings_XI_Punjab.jpg',
            short: 'KXIP',
            width: '94px',
            marginTop: '0px',
            color: 'linear-gradient(135deg, #e01111f1 10%, #945a5ac1 100%)'
          },
          {
            image: 'static/img/team-logo/Kochi_Tuskers_Kerala.png',
            name: 'Kochi Tuskers Kerala',
            photo: 'static/img/team-photo/Kochi_Tuskers_Kerala.jpg',
            short: 'KTK',
            width: '127px',
            marginTop: '11px',
            color: 'linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)'
          },
          {
            image: 'static/img/team-logo/Kolkata_Knight_Riders.png',
            name: 'Kolkata Knight Riders',
            photo: 'static/img/team-photo/Kolkata_Knight_Riders.jpg',
            short: 'KKR',
            width: '72px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #3B2667F1 10%, #BC78ECC1 100%)'
          },
          {
            image: 'static/img/team-logo/Mumbai_Indians.png',
            name: 'Mumbai Indians',
            photo: 'static/img/team-photo/Mumbai_Indians.jpg',
            short: 'MI',
            width: '150px',
            marginTop: '12px',
            color: 'linear-gradient( 135deg, #52E5E7F1 10%, #130CB7C1 100%)'
          },
          {
            image: 'static/img/team-logo/Pune_Warrior.png',
            name: 'Pune Warrior',
            photo: 'static/img/team-photo/Pune_Warrior.jpg',
            short: 'PW',
            width: '200px',
            marginTop: '0px',
            color: 'linear-gradient(135deg, #bdbdbdeb 10%, #000000eb 100%)'
          },
          {
            image: 'static/img/team-logo/Rajasthan_Royals.png',
            name: 'Rajasthan Royals',
            photo: 'static/img/team-photo/Rajasthan_Royals.jpg',
            short: 'RR',
            width: '120px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #6B73FFF1 10%, #000DFFC1 100%)'
          },
          {
            image: 'static/img/team-logo/Rising_Pune_Supergiant.png',
            name: 'Rising Pune Supergiant',
            photo: 'static/img/team-photo/Rising_Pune_Supergiant.jpg',
            short: 'RPS',
            width: '205px',
            marginTop: '23px',
            color: 'linear-gradient( 135deg, #FF6FD8F1 10%, #3813C2C1 100%)'
          },
          {
            image: 'static/img/team-logo/Royal_Challengers_Bangalore.png',
            name: 'Royal Challenges Bangalore',
            photo: 'static/img/team-photo/Royal_Challengers_Bangalore.jpg',
            short: 'RCB',
            width: '80px',
            marginTop: '0px',
            color: 'linear-gradient(135deg, #c9920e 10%, #f9de8cb5 100%)'
          },
          {
            image: 'static/img/team-logo/Sunrisers_Hyderabad.png',
            name: 'Sunrisers Hyderabad',
            photo: 'static/img/team-photo/Sunrisers_Hyderabad.jpg',
            short: 'SH',
            width: '150px',
            marginTop: '0px',
            color: 'linear-gradient( 135deg, #FD6E6AF1 10%, #FFC600C1 100%)'
          }
        ]
      };
    },
    methods: {
      style(photo) {
        return `background: url(${photo}) center center no-repeat`;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .team-list{
    overflow: hidden;
    float: left;
    .team-card {
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
      & .content  {
        overflow: hidden;
        height: 100%;
        z-index: 2;
        & .logo {
          height: 101px;
          padding: 13px;
          object-fit: cover;
        }
        & .text{
          & .team-name{
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 25px;
            font-weight: 700;
            color: #ffffff;
            white-space: initial;
            width: 100%;
            padding: 20px;
          }
        }
      }
    }
  }
</style>
