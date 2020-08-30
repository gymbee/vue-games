<template>
    <div>
        <h1>Favorites</h1>
        <p v-if="favsToDisplay.length">From recent to long ago</p>
        <GamesList :games="favsToDisplay" :qty="favsToDisplay.length" />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex' 
import GamesList from '@/components/GamesList'
export default {
    components: { GamesList },
    computed: mapGetters(['favsToDisplay', 'allGames']),
    methods: mapActions(['getFavsToDisplay']),
    watch: {
        allGames() {
            this.getFavsToDisplay()
        }
    },
    mounted() {
        this.getFavsToDisplay()
    }
}
</script>