<template>
    <router-link :to="{path: href}" v-on:click.native="reloadFavIfActive()">{{text}}</router-link>
</template>

<script>
import { mapActions } from 'vuex' 
export default {
    props: ['text', 'href'],
    data() {
        return { lastRoute: this.$route.path }
    },
    methods: {
        ...mapActions(['getFavsToDisplay']),
        reloadFavIfActive() {
            if (this.$el.classList.contains('router-link-exact-active') && this.lastRoute === this.$route.path && this.href === '/favorites') {
                this.getFavsToDisplay()
            }
        }
    },
    watch: {
        $route() {
            setTimeout(() => {
                this.lastRoute = this.$route.path
            }, 100)
        }
    }
}
</script>

<style scoped>
a {
    padding: 1rem;
    margin: 1rem;
    background-color: rgb(170, 170, 170);
    color: #333;
    border-radius: 3px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
}
a:hover {
    background-color: rgb(223, 215, 144);
}
.router-link-exact-active {
    background-color: rgb(224, 205, 26);
}
</style>