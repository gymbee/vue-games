<template>
    <div>

        <p v-if="!qty">No games to show</p>
        <GameCard
            v-for="game of games"
            v-bind:key="game.id + 'game'"
            v-bind:game="game"
        />
    
    </div>
</template>

<script>
import GameCard from '@/components/GameCard'
export default {
    props: ['games', 'qty'],
    components: { GameCard }
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