window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')
    fetchSongs()
    mountFormListener()

    const title = document.querySelector('#title')
    const artist = document.querySelector('#artist')
    const album = document.querySelector('#album')
    const cover = document.querySelector('#cover')
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
        albumCover: cover.value
    }
}

function createSong(songObj) {
    fetch('http://localhost:3000/api/v1/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({song: songObj})
    })
        .then(resp => resp.json())
        .then(data => console.log(data))
}