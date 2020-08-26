<template>
    <div>
        <GameCard
            v-for="game of games"
            v-bind:key="game.id + 'game'"
            v-bind:game="game"
        />
        <p v-if="!areGamesToShow">No games to show</p>

    </div>
</template>

<script>
import GameCard from '@/components/GameCard'
export default {
    props: ['games'],
    components: {
        GameCard
    },
    data() {
        return {
            areGamesToShow: false
        }
    },
    mounted() {
        setTimeout(() => {
            if(this.games.length) this.areGamesToShow = true
        },10)
    }
} 
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 600px;
    max-width: 90%;
    margin: auto;
}
</style>