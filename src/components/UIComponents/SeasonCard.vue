<template>
  <div class="season-card" :style="{background: this.color}">
    <div class="card">
      <div class="season-card-front">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SeasonCard',
    props: {
      color: {
        type: String,
        default: ''
      }
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
  }
  %season-card {
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
  .season-card {
    @extend %season-card;
    & .card {
      position: relative;
      transform-style: preserve-3d;
      transition: .5s ease;
      & .seasoon-card-front {
        width: 316px;
        height: 381px;
        position: absolute;
        top: 0;
        bottom: 0;
        backface-visibility: hidden;
        overflow: hidden;
      }
    }
  }

</style>
