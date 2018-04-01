<template>
  <div :class="`team-card ${team.short}-card`">
    <div class="card">
      <div class="team-card-front" :style="style(team.photo)" >
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
      <div class="team-card-back">
        <div class="content" :style="{'background': team.color}">
            <span class="team-statistic">TEAM STATISTIC</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'year-card',
    props: {
      team: {
        type: Object,
        required: true
      }
    },
    methods: {
      style(photo) {
        return `background: url(${photo}) center center no-repeat`;
      }
    }
  };
</script>

<style lang="scss" scoped>

  %team-card {
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
  .team-card{
    @extend %team-card;

    &:hover .card {
      transform: rotateY(180deg);
    }
    & .card {
      position: relative;
      transform-style: preserve-3d;
      transition: .5s ease;

      & .team-card-front {
        width: 316px;
        height: 381px;
        position: absolute;
        top: 0;
        bottom: 0;
        backface-visibility: hidden;
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
      & .team-card-back {
        width: 316px;
        height: 381px;
        position: absolute;
        top: 0;
        bottom: 0;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        & .content {
          overflow: hidden;
          height: 100%;
          z-index: 2;
          & .team-statistic{
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 25px;
            font-weight: 700;
            color:white;
          }
        }
      }
    }
  }
</style>
