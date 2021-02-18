class Song {
    constructor(song) {
        this.id = song.id
        this.title = song.title
        this.artist = song.artist
        this.album = song.album
        this.albumCover = song.album_cover
        this.user = song.user_id
    }

    static addSongButton() {
        let body = document.getElementById('container')
        let songButton = document.createElement('button')
        songButton.innerHTML = 'Add Song'
    }

    postSongs() {
        let body = document.getElementById('container')
        let newUl = document.createElement('ul')
        body.append(newUl)
        let newLi = document.createElement('li')
        newLi.setAttribute('data-id', this.id)
        newLi.innerHTML = this.title + " - " + this.artist
        let albumCover = document.createElement('img')
        albumCover.setAttribute('src', this.albumCover)
        newLi.append(albumCover)
        newUl.append(newLi)
    }
}