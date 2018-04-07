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
          <br/>
          <br/>
          <br/>
          <div class="best-result">
            <img :src="'/static/img/misc/cup.png'" alt="" style="height: 148px;z-index: 2;position: absolute">
            <div class="text" :style="{'color': team.color.slice(25, 34)}">
            Best Result
              <span class="result">{{team.bestResult.position}}</span>
              <div class="year">{{team.bestResult.year.join(",")}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="team-card-back">
        <div class="content" :style="{'background': team.color}">
            <span class="team-statistic">Performance</span>
            <div class="performance">
              <div class="bar">
                <div class="total-matches" :style="{'color': team.color.slice(25, 34)}">
                     <span class="number-of-matches" :style="{'background': team.color.slice(25, 34)}">{{this.totalMatches()}}</span>
                     total Matches
                </div>
                <div class="winning-rate" :style="{'color': team.color.slice(25, 34)}">
                  <span class="percentage" :style="{'background': team.color.slice(25, 34)}">{{this.winningRate()}}</span>
                  winning rate(%)
                </div>
                <div class="tie" :style="{'color': team.color.slice(25, 34)}">
                  <span class="score" :style="{'background': team.color.slice(25, 34)}">{{this.team.tie.win + this.team.tie.lose}}<sup style="font-size: 19px">*</sup></span>
                  T+W:{{this.team.tie.win}}|T+L:{{this.team.tie.lose}}
                </div>
              </div>
              <div class="lineChart">
                <bar-chart :height="250" :chartData="datacollection" :customOption="{}"/>
              </div>
              <div class="info">
                <span style="{'background': team.color.slice(25, 34)}">*</span>T+W and T+L indicates matches tied and then won or lost by "Super Over"
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BarChart from './BarChart';


  export default {
    name: 'year-card',
    components: { BarChart },
    props: {
      team: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        ctx: null,
        datacollection: {
          labels: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
          datasets: [
            {
              label: 'Matches Won in season',
              backgroundColor: this.team.color.slice(40, 47),
              data: this.team.totalMatchesWon
            },
            {
              label: 'Total Matches played in season',
              backgroundColor: this.team.color.slice(25, 34),
              data: this.team.totalMatches
            },
          ]
        }
      };
    },
    methods: {
      style(photo) {
        return `background: url(${photo}) center center no-repeat`;
      },
      totalMatches() {
        return this.team.totalMatches.reduce((a, b) => a + b);
      },
      winningRate() {
        const totalMatches = this.totalMatches();
        const wonMatches = this.team.totalMatchesWon.reduce((a, b) => a + b);
        return ((wonMatches / totalMatches) * 100).toFixed(1).toString();
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
    text-align: center;
    text-rendering: optimizeLegibility;
    overflow: hidden;
    transition: all 0.5s ease-in-out;
    perspective: 500px;
  }
  .team-card {
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
        overflow: hidden;
        & .content {
          overflow: hidden;
          height: 100%;
          z-index: 2;
          & .logo {
            height: 101px;
            padding: 13px;
            object-fit: cover;
          }
          & .text {
            z-index: 3;
            & .team-name {
              font-family: 'IBM Plex Sans', sans-serif;
              font-size: 23px;
              font-weight: 700;
              color: #ffffff;
              white-space: initial;
              width: 100%;
              margin-top: 30px;
            }
          }
          & .white-box{
            background: white;
            width: 153%;
            height: 159px;
            position: absolute;
            bottom: -26px;
            left: -24px;
            -webkit-transform: rotate(-19deg);
            transform: rotate(-19deg);
            z-index: 1;
          }
          & .best-result{
            display: flex !important;
            justify-content: space-around;
            & .text{
              margin-left: 161px;
              font-family: 'IBM Plex Sans', sans-serif;
              font-size: 23px;
              display: flex;
              flex-direction: column;
              font-weight: 700;
              color: #ffffff;
              white-space: initial;
              margin-top: 30px;
              .result {
                font-size: 67px;
                margin: -22px;
              }
              .year {
                font-size: 10px;
                margin-top: 8px;
              }
            }

          }
        }
      }
      & .team-card-back {
        z-index: 4;
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
          & .team-statistic {
            font-family: 'IBM Plex Sans', sans-serif;
            font-size: 25px;
            font-weight: 700;
            color: white;
          }
          & .performance {
            width: 316px;
            height: 381px;
            background-color: white;
            & .bar {
              height: 55px;
              width: 100%;
              padding: 5px;
              display: flex;
              margin-bottom: 20px;
              justify-content: space-between;
              & .total-matches {
                font-size: 11px;
                position: absolute;
                top: 59px;
                left: 3px;
                width: 101px;
                line-height: 13px;
                white-space: pre-line;
                .number-of-matches {
                  font-size: 50px;
                  font-weight: 700;
                  -webkit-background-clip: text !important;
                  -webkit-text-fill-color: transparent;
                }
              }
              & .winning-rate {
                font-size: 11px;
                position: absolute;
                top: 62px;
                left: 118px;
                width: 101px;
                line-height: 6px;
                white-space: pre-line;
                .percentage {
                  font-size: 50px;
                  font-weight: 700;
                  -webkit-background-clip: text !important;
                  -webkit-text-fill-color: transparent;
                }
              }
              & .tie {
                font-size: 11px;
                position: absolute;
                top: 52px;
                left: 222px;
                width: 101px;
                line-height: 13px;
                white-space: pre-line;
                .score {
                  font-size: 50px;
                  font-weight: 700;
                  -webkit-background-clip: text !important;
                  -webkit-text-fill-color: transparent;
                }
              }
              & .lineChart {
              }
            }
            & .info{
              position: absolute;
              font-size: 8px;
              bottom: 5px;
              left: 9px;
            }
          }
        }
      }
    }
  }
</style>
