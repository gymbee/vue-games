<template>
    <button 
        v-if="type === 'favHeart'" 
        v-on:click="favoriteClickHandler(gameId)"
        v-bind:class="{'favorite': isFavorite(gameId)}"
        class="heart-button"
    >
    <font-awesome-icon icon="heart" />
    </button>
    <button v-else>{{text}}</button>
    
</template>

<script>
import FavoritesMixin from '@/mixins/favorites'
export default {
    mixins: [FavoritesMixin],
    props: ['text', 'type', 'gameId'],
}
</script>

<style scoped>
button {
    padding: 1rem;
    background-color: rgb(170, 170, 170);
    color: #333;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
}
@media (hover: hover) {
    button:hover {
        background-color: rgb(199, 199, 199);
        cursor: pointer;
    }
}
button:focus {
    border: none;
    outline: none;
}
.heart-button {
    transition: color .1s linear;
    color: #fff;
}
.favorite {
    color: #ce0000;
}
.heart-button span {
    height: 1rem;
    width: 1rem;
}
.heart-button span::after {
    position: absolute;
    height: 1rem;
    width: 1rem;
    content: "LIKE"
}

</style>