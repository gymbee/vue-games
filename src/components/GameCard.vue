<template>
    <div class="card">
        <h3>{{game.title}}</h3>
        <div class="card-content">
            <div class="game-info">
                <img 
                    :src="`https://picsum.photos/id/${game.id}/400/250.jpg`" 
                    :alt="game.title"
                />
            </div>
            <div class="game-buttons">
                <Button :type="'favHeart'" :gameId="game.id" />
                <Button 
                    v-if="game.hasDemo === 'true'"
                    :text="'Demo'"
                />
            </div>
        </div>
    </div>
</template>

<script>
import Button from '@/components/UI/Button'
export default {
    props: {
        game: {
            type: Object,
            required: true
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
h3 {
    margin-top: 0;
    width: 100%;
    text-align: left;
}
.card {
    background-color: rgb(58, 58, 58);
    margin: 1rem 0;
    padding: 2rem;
}
.card-content {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-self: flex-start;
    width: 100%;
}
.game-info {
    padding-right: 2rem;
    width: 300%;
    overflow:hidden;
}
.game-info img {
    display: block;
    width: 100%;
}
.game-buttons {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: flex-end;
    justify-content: space-between;
    width: 100%; 
}
.game-buttons button {
    display: block;
    width: 100%;
}
</style>