<template>
    <div class="year-card" :style="style">
      <div class="year">{{year}}</div>
      <div class="total-matches"><span class="matches">{{matchPlayed}}</span> <br/>matches played</div>
    </div>
</template>

<script>
  export default {
    name: 'year-card',
    props: {
      year: {
        type: Number,
        required: true
      },
      matchPlayed: {
        type: Number,
        required: true
      },
      backgroundColor: {
        type: String,
        required: true
      }
    },
    computed: {
      style() {
        return `background:  ${this.backgroundColor}`;
      }
    },
  };
</script>

<style lang="scss" scoped>
  .year-card {
    width:200px;
    height: 185px;
    border-radius: 5px;
    padding: 10px;
    display: inline-block;
    cursor: pointer;
    font-family: 'IBM Plex Sans', sans-serif;
    margin: 0 10px 0 0;
    transition: all 0.8s cubic-bezier(0.2,1,0.3,1);

    & .year {
      color: white;
      font-weight: 700;
      font-size: 35px;
    }
    & .total-matches {
      text-align: center;
      position: relative;
      font-size: 15px;
      margin-top: 40px;
      line-height: 17px;
      color: white;
      & span {
        font-weight: 700;
        font-size: 100px;
      }
    }
  }
</style>
