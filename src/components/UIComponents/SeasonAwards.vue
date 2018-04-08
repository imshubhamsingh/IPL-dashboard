<template>
  <div class="awards">
    <span class="top-text">Awards</span>
    <div class="top-content">
      <div class="orange-cap">
        <div class="title">Orange Cap</div>
        <span style="font-size: 20px;">{{this.awards.Orange_Cap.name}}</span>
        <span>
          <span style="margin-right: 10px;">Matches: {{this.awards.Orange_Cap.matches}}</span>
          <span>Runs: {{this.awards.Orange_Cap.runs}}</span>
        </span>
      </div>
      <div class="purple-cap">
        <div class="title">Purple Cap</div>
        <span style="font-size: 20px;">{{this.awards.Purple_Cap.name}}</span>
        <span>
          <span style="margin-right: 10px;">Matches: {{this.awards.Purple_Cap.matches}}</span>
          <span>Wickets: {{this.awards.Purple_Cap.wickets}}</span>
        </span>
      </div>
      <div class="maximum-sixes">
        <div class="title">Maximum Sixes</div>
        <span style="font-size: 20px;">{{this.awards.Maximum_Sixes.name}}</span>
        <span>
          <span style="margin-right: 10px;"> Matches: {{this.awards.Maximum_Sixes.matches}}</span>
          <span>Sixes: {{this.awards.Maximum_Sixes.sixes}}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SeasonAwards',
    props: {
      awards: {
        type: Object,
        required: true
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

</style>
