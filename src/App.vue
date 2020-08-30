<template>
  <div id="app">
    <Navigation />

    <router-view />
    
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'
import {mapActions} from 'vuex' 
export default {
  components: { Navigation },
  methods: mapActions(['getAllGames', 'getAllFavs']),
  created() {
    this.getAllGames()
    this.getAllFavs()
  },
  watch: {
    $route: {
      immediate: true,
      handler(to, from) {
        document.title = to.meta.title || document.title
      }
    }
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
