class Song {
    constructor(song) {
        this.id = song.id
        this.title = song.title
        this.artist = song.artist
        this.album = song.album
        this.album_cover = song.album_cover
        this.user = song.user_id
    }

    postSongs() {
        let body = document.getElementById('container')
        let songDiv = document.createElement('div')
        songDiv.setAttribute('data-id', this.id)
        songDiv.className = 'song-box'
        body.append(songDiv)        
        let newP = document.createElement('p')
        newP.className = 'song-info'
        newP.innerHTML = `${this.title} by ${this.artist} <br> <small>${this.album}</small>`
        songDiv.append(newP)
        let albumCover = document.createElement('img')
        albumCover.setAttribute('src', this.album_cover)
        albumCover.setAttribute('alt', `Album cover for ${this.album}`)
        albumCover.className = 'album-cover'
        songDiv.append(albumCover)
        let deleteButtonDiv = document.createElement('div')
        deleteButtonDiv.className = 'delete-button'
        songDiv.append(deleteButtonDiv)
        let deleteButton = document.createElement('button')
        deleteButton.className = 'delete'
        deleteButton.innerHTML = 'Delete'
        deleteButtonDiv.append(deleteButton)
    }

}