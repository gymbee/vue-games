<template>
    <div>
        <Link :text="'All games'" :href="'/'" />
        <Link 
            :text="favQtySpan" 
            :href="'/favorites'"
            v-html="favQtySpan"
        />
    </div>
</template>

<script>
import Link from '@/components/UI/Link'
import FavoritesMixin from '@/mixins/favorites'
export default {
    mixins: [FavoritesMixin],
    components: {
        Link
    },
    data() {
        return {
            favQtySpan: 'Favorites (<span class="favqty">0</span>)'
        }
    }
}
</script>

<style scoped>
div {
    padding: 2rem 0;
}
</style>