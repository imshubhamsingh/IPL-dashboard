<template>
  <div class="season-result">
            <span class="top-text">SEASON RESULT</span>
            <div style="width: 245px;float: right;white-space: normal;">
              <div class="winner">
                <img
                  :src="`/static/img/team-logo/${this.result[0].split(' ').join('_')}.png`"
                  style="width: 93px;margin-bottom: -112px;position: relative; z-index: 2"
                />
                <span class="first">1st</span>
                <div>
                  {{this.result[0]}}
                </div>
              </div>
              <div class="runner-up">
                <img
                  :src="`/static/img/team-logo/${this.result[1].split(' ').join('_')}.png`"
                  style="width: 73px;margin-bottom: -112px;position: relative; z-index: 2"
                />
                <span class="second">2nd</span>
                <div>
                  {{this.result[1]}}
                </div>
              </div>

            </div>

          </div>
</template>

<script>
  export default {
    name: 'SeasonResult',
    props: {
      result: {
        type: Array,
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
  .season-result {
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
        font-size: 45px;
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
      & .winner{
        margin-top: -62px;
        position: absolute;
        & .first{
          font-size: 141px;
          color: #40b9e74d;
          top: 0;
        }
        & div {
          margin: -81px 0px;
          font-size: 22px;
          font-weight: 700;
        }

      }
      & .runner-up{
        margin-top: 105px;
        position: absolute;
        & .second{
          font-size: 100px;
          color: #31566442;
          top: 0;
        }
        & div {
          margin: -27px 0px;
          font-size: 17px;
          font-weight: 700;
        }

      }
    }
</style>
