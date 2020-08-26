export default {
    data() {
        return {
            allGames: []
        }
    },
    methods: {
        async getAllGames() {
            try {
                await fetch('games.json')
                    .then(response => response.json())
                    .then(json => this.allGames = json.games)
            } catch (e) {
                console.log(e)
            }
        }
    }
}