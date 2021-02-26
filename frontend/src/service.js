class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    findOrCreateUser(e) {
        return fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({user: {name: e.target.children[0].value}})
                     
        })
                .then(resp => {
                return resp.json()
                })
    }

    static fetchSongs() {
        return fetch('http://localhost:3000/api/v1/songs')
                .then(resp => resp.json())
                .then(songs => function() {
                    for (const song of songs) {
                        let newSong = new Song(song)
                        newSong.postSong()
                    }
                })
    }

    fetchCreateSong(e) {
        return fetch('http://localhost:3000/api/v1/songs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({song: getSongData(e.target)})
            })
                .then(resp => resp.json())
    }

} 