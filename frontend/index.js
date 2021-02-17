window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')
    fetchSongs()

    const title = document.querySelector('#title')
    const artist = document.querySelector('#artist')
    const album = document.querySelector('#album')
    const albumCover = document.querySelector('#album-cover')
    const submit = document.querySelector('#submit')
})

function fetchSongs() {
    fetch('http://localhost:3000/api/v1/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))
}

function mountFormListener() {
    const songForm = document.querySelector('#song-form')
    songForm.addEventListener('submit', e => {
        e.preventDefault()
        const songObj = getSongData(e.target)
        console.log(songObj)
        e.target.reset
    })
}

const getSongData = function(form) {
    return {
        title: title.value,
        artist: artist.value,
        album: album.value,
        albumCover: albumCover.value
    }
}