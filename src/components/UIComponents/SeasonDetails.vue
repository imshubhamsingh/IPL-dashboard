<template>
  <div class="match-details">
            <span class="top-text">Match Details</span>
            <div>
                  <span class="custom-dropdown">
                    <select v-model="date" v-on:change="getMatchDetails">
                      <option disabled value="">Please select one</option>
                      <option :value="date[0]" v-for="date in this.details.map((match,index) => [index,match.Match_Date])">{{date[1]}}</option>
                    </select>
                  </span>
              <br/>
              <div class="match" v-if="date !== ''">
                <img class="team-playing"
                     :src="`/static/img/team-logo/${this.selectedMatchDetails.Team_Name.split(' ').join('_')}.png`"
                />
                <span class="vs">VS</span>
                <img class="opponent-playing"
                     :src="`/static/img/team-logo/${this.selectedMatchDetails.Opponent_Team.split(' ').join('_')}.png`"
                />
                <div style="position: relative;top: 50px;white-space: normal;">
                  {{this.selectedMatchDetails.Match_Winner}} won by {{this.selectedMatchDetails.Won_By}} {{this.selectedMatchDetails.Win_Type.split(' ')[this.selectedMatchDetails.Win_Type.split(' ').length-1]}}
                </div>
              </div>
            </div>

          </div>
</template>

<script>

  export default {
    name: 'SeasonDetails',
    props: {
      details: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        date: '',
        selectedMatchDetails: ''
      };
    },
    watch: {
      $route() {
        this.date = '';
      }
    },
    methods: {
      getMatchDetails() {
        this.selectedMatchDetails = this.details[this.date];
      }
    }
  };
</script>

<style lang="scss" scoped>
  %text {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    color: white;
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
    .custom-dropdown {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      margin: 10px;
      & select {
        background-color: #1abc9c;
        color: #fff;
        font-size: inherit;
        padding: .5em 2.5em .5em .5em;
        border: 0;
        width: 245px;
        margin: 0 0 0 34px;
        border-radius: 3px;
        text-indent: 0.01px;
        -webkit-appearance: button;
      }
      &::before {
        content: '';
        position: absolute;
        pointer-events: none;
        width: 2em;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 0 3px 3px 0;
      }
      &::after {
        position: absolute;
        content: "\25BC";
        height: 1em;
        font-size: .625em;
        line-height: 1;
        right: 1.2em;
        top: 50%;
        margin-top: -.5em;
      }
    }
    .match{
      margin-left: 40px;
      height: 175px;
      margin-top: 33px;
      & .vs {
        position: relative;
        top: 16px;
        font-size: 50px;
        color: #bbbbbb;
      }
      & .team-playing {
        width: 84px;
        margin-bottom: -112px;
        position: relative;
        z-index: 2;
        top: -93px;
        position: relative;
        left: -3px;
      }
      & .opponent-playing {
        width: 84px;
        margin-bottom: -112px;
        position: relative;
        z-index: 2;
        top: -87px;
        position: relative;
        left: 2px;
      }
    }
  }
</style>
