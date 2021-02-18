document.addEventListener('DOMContentLoaded', function() {
    // Song.createSong()
})

class Song {
    constructor(song) {
        this.id = song.id
        this.title = song.title
        this.artist = song.artist
        this.album = song.album
        this.albumCover = song.album_cover
        this.user = song.user_id
    }

    // static createSong() {
    //     let newSongForm = document.getElementById('songs-form')
    //     newSongForm.innerHTML = '<form> <input type="text">'
    // }
}