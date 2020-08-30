<template>
    <div>
        <Link :text="'All games'" :href="'/'" />
        <Link 
            :text="`Favorites (${allFavs.length})`" 
            :href="'/favorites'"
        />
    </div>
</template>

<script>
import Link from '@/components/UI/Link'
import { mapGetters } from 'vuex' 
export default {
    components: { Link },
    computed: mapGetters(['allFavs'])
}
</script>

<style scoped>
div {
    padding: 2rem 0;
}
</style>