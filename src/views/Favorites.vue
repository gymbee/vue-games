<template>
    <div>
        <h1>Favorites</h1>
        <p v-if="favsToDisplay.length">From recent to long ago</p>
        <GamesList :games="favsToDisplay" />
    </div>
</template>

<script>
import GamesList from '@/components/GamesList'
import FavoritesMixin from '@/mixins/favorites'
export default {
    title: 'Favorites',
    mixins: [FavoritesMixin],
    mounted() {
        this.updateFavsToDisplay()
    },
    watch: {
        games() {
            this.updateFavsToDisplay()
        }
    },
    components: {
        GamesList
    },
    props: ['games']
}
</script>