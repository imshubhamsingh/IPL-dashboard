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
  body {
    background: #1e2424;
    height: 100vh;
    overflow-y: hidden;
  }
  #app {
    padding: 10px;
  }
</style>
