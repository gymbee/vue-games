import Vue from 'vue'
import Vuex from 'vuex'
import Games from './modules/games'
import Favorites from './modules/favorites'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { Games, Favorites }
})