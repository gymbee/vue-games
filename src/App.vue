<template>
  <div id="app">
    <Navigation />

    <router-view :games="allGames" />
    
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import GamesMixin from '@/mixins/games'
export default {
  mixins: [GamesMixin],
  components: {
    Navigation  
  },
  created: function() {
    this.getAllGames()
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || document.title
      }
    },
  }
}
</script>

<style>
body {
  background-color: #333;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin-top: 60px;
}
</style>
