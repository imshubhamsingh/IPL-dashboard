<template>
  <div id="app">
    <HomeLayout/>
  </div>
</template>

<script>
import HomeLayout from './components/Dashboard/Layout/HomeLayout';

export default {
  components: {
    HomeLayout
  }
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
</style>
