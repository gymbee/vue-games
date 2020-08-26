export default {
    data() {
        return {
            favorites: [],
            favsToDisplay: [],
            favQty: 0
        }
    },
    created: function () {
        this.loadFavs()
    },
    methods: {
        favoriteClickHandler(id) {
            let favs = this.loadFavs()
            if (favs.includes(id)) {
                this.favorites = favs.filter(i => i !== id)
            } else {
                favs.push(id)
                this.favorites = favs
            }
            this.saveFavs()            
        },
        loadFavs() {
            const favs = JSON.parse(localStorage.getItem('localFavorites'))
            if (favs) {
                this.favorites = favs
                return favs
            } 
            return []
        },
        saveFavs() {
            localStorage.setItem('localFavorites', JSON.stringify(this.favorites))
        },
        isFavorite(id) {
            if (this.favorites.includes(id)) {
                return true
            }
            return false
        },
        updateFavsToDisplay() {
            if (this.games) {
                const sortedFavs = []
                const unsortedFavs = this.games.filter(i => this.favorites.includes(i.id))
                this.favorites.forEach(id => {
                    unsortedFavs.forEach(obj => {
                        if (id === obj.id) sortedFavs.push(obj)
                    })
                })
                this.favsToDisplay = sortedFavs.reverse()
            }
        }
    },
    watch: {
        favorites() {
            const favCounters = document.getElementsByClassName('favqty')
            if (favCounters.length) {
                favCounters.forEach(item => item.textContent = this.favorites.length)
            }
        }
    }
}