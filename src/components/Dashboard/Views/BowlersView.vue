<template>
  <div>
    <div class="bowlers">
      <h1 class="title">Tops 10 Number of Over</h1>
      <bar-chart :height="300" :chartData="datacollection" :customOption="customOption"/>
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
        bowlers: this.$store.getters.particularSeasonTopOverBowled('overAll'),
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
        labels: this.bowlers.map(b => b.bowler),
        datasets: [
          {
            label: 'Total Overs (2008-2016)',
            backgroundColor: '#e86c9a',
            data: this.bowlers.map(b => b.total_overs)
          },
          {
            label: 'Economy',
            backgroundColor: '#ffc9dd',
            data: this.bowlers.map(b => b.economy)
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
    background: linear-gradient( 135deg, #FFF 10%, #e86c9a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .bowlers {
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
