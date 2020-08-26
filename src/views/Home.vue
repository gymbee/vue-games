<template>
    <div>
        <h1>All Games</h1>
        <GamesList :games="games" />
    </div>
</template>

<script>
import GamesList from '@/components/GamesList'
export default {
    components: {
        GamesList
    },
    props: ['games']
}
</script>