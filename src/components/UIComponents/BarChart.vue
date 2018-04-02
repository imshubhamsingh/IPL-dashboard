<script>
  import { Bar } from 'vue-chartjs';


  export default {
    extends: Bar,
    props: {
      chartData: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [{
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      };
    },
    mounted() {
      // this.chartData is created in the mixin
      this.renderChart(this.chartData, this.options);
    }
  };
</script>
