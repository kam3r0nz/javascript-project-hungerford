class User {
    constructor(user) {
        this.id = user.id
        this.name = user.name
        this.songs = user.songs
    }

    static fakeLogin() {
        let newUserForm = document.getElementById('users-form')
        newUserForm.addEventListener('submit', e => {
            e.preventDefault()
            apiService.findOrCreateUser(e)
                .then(user => {
                    let newUser = new User(user)
                    newUser.displayUser()
                })
        })
    }

    displayUser() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let welcomeMessage = document.createElement('p')
        welcomeMessage.setAttribute('data-id', this.id)
        welcomeMessage.innerHTML = `<h2>Welcome, ${this.name}!</h2>`
        body.append(welcomeMessage)
        if (this.songs) {
            this.songs.forEach(function(song) {
                let newSong = new Song(song)
                newSong.postSongs()
            })
        }
    }
}