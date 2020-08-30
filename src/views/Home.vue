<template>
    <div>
        <h1>All Games</h1>
        <GamesList :games="allGames" :qty="allGames.length" />
    </div>
</template>

<script>
import { mapGetters } from 'vuex' 
import GamesList from '@/components/GamesList'
export default {
    components: { GamesList },
    computed: mapGetters(['allGames']),
}
</script> 