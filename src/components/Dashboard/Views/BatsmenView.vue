<template>
  <div>
    <div class="batsmen">
      <h1 class="title">Tops 10 batsmen</h1>
      <bar-chart :height="295" :chartData="datacollection" :customOption="customOption"/>
    </div>
  </div>
</template>

<script>
  import BarChart from '../../UIComponents/BarChart';

  export default {
    components: {
      BarChart
    },
    data() {
      return {
        batsmen: this.$store.getters.particularSeasonTopBatsMen('overAll'),
        datacollection: {},
        customOption: {
          scales: {
            yAxes: [{
              ticks: {
                fontColor: 'white',
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              ticks: {
                fontColor: 'white',
                beginAtZero: true
              },
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true,
            labels: {
              fontColor: 'white',
            }
          },
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    beforeMount() {
      this.datacollection = {
        labels: this.batsmen.map(b => b.batsman),
        datasets: [
          {
            label: 'Total runs (2008-2016)',
            backgroundColor: '#07d89d',
            data: this.batsmen.map(b => b.total_runs)
          },
          {
            label: 'Total Matches played in season',
            backgroundColor: '#81ffdb',
            data: this.batsmen.map(b => b.extra_runs)
          },
        ]
      };
    }
  };
</script>

<style lang="scss" scoped>
  %text {
    font-family: 'IBM Plex Sans', sans-serif;
    text-transform: uppercase;
    color: white;
  }
  .title{
    @extend %text;
    padding: 0 9px;
    font-size: 43px;
    margin: 0;
    font-weight: 700;
    background: linear-gradient( 135deg, #FFF 10%, #07d89d 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .batsmen {
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
  }
</style>
