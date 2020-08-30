export default {
    state: {
        favs: [],
        favsToDisplay: []
    }, 
    actions: {
        getAllFavs(ctx) {
            const favs = JSON.parse(localStorage.getItem('localFavorites'))
            if (favs) ctx.commit('updateFavs', favs)
        },
        getFavsToDisplay(ctx) {
            const games = ctx.rootGetters.allGames
            if (games && ctx.state.favs) {
                const sortedFavs = []
                const unsortedFavs = games.filter(i => ctx.state.favs.includes(i.id))
                ctx.state.favs.forEach(id => {
                    unsortedFavs.forEach(obj => {
                        if (id === obj.id) sortedFavs.unshift(obj)
                    })
                })
                ctx.commit('updateFavsToDisplay', sortedFavs)
            }
        },
        favBtnClickHandler(ctx, id) {
            let favs = [...ctx.state.favs]
            if (favs.includes(id)) {
                ctx.commit('updateFavs', favs.filter(i => i !== id))
            } else {
                favs.push(id)
                ctx.commit('updateFavs', favs)
            }
            localStorage.setItem('localFavorites', JSON.stringify(ctx.state.favs))
        }
    },
    mutations: {
        updateFavs(state, favs) { 
            state.favs = favs
        },
        updateFavsToDisplay(state, favsToDisplay) { 
            state.favsToDisplay = favsToDisplay
        },
    },
    getters: {
        allFavs(state) { 
            return state.favs 
        },
        favsToDisplay(state) {
            return state.favsToDisplay 
        }
    }
}