class Song {
    constructor(song) {
        this.id = song.id
        this.title = song.title
        this.artist = song.artist
        this.album = song.album
        this.albumCover = song.album_cover
        this.user = song.user_id
    }

    static createSongForm() {
        let body = document.getElementById('container')
        let songForm = document.getElementById('songs-form')
        songForm.innerHTML = '<input type="text">'
    }

    postSongs() {
        let body = document.getElementById('container')
        let newUl = document.createElement('ul')
        body.append(newUl)
        let newLi = document.createElement('li')
        newLi.innerHTML = this.title + " - " + this.artist
        newUl.append(newLi)
    }
}