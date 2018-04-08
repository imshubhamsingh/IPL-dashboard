<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  };
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700');
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:400,700');

  body {
    background: #2b2b2b;
    height: 100%;
  }
  #app {
    padding: 10px;
  }
 *{
   -webkit-tap-highlight-color: rgba(0,0,0,0);
   -webkit-tap-highlight-color: transparent;
 }
  ::-webkit-scrollbar-track
  {
    border: none;
    background-color: #2b2b2b;
  }

  ::-webkit-scrollbar
  {
    width: 10px;
    background-color: #F5F5F5;
  }

  ::-webkit-scrollbar-thumb
  {
    background-color: #313131;
  }

</style>
