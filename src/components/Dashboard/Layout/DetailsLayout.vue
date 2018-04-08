<template>
  <div>
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
</template>

<script>
  export default {
    name: 'TeamDetailsLayout',
    data() {
      return {
        heading: ['TEAMS', 'BATSMEN', 'BOWLERS']
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
    text-decoration: none;
  }
  .header{
    display: block;
    width: 100%;
    height: 65px;
    overflow-y: hidden;
    overflow-x: scroll;
    white-space: nowrap;
    margin-bottom: 21px;
    border-radius: 5px;
    & .teams {
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
    & .batsmen {
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
    & .bowlers {
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
  }

</style>
