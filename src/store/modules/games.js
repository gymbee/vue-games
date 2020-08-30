export default {
    state: {
        games: []
    }, 
    actions: {
        async getAllGames(ctx) {
            try {
                await fetch('/games.json')
                    .then(response => response.json())
                    .then(json => ctx.commit('updateGames', json.games))
            } catch (e) {
                console.log(e)
            }
        }
    },
    mutations: {
        updateGames(state, games) { 
            state.games = games
        }
    },
    getters: {
        allGames(state) { 
            return state.games 
        }
    }
}