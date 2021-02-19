const apiService = new ApiService()

window.addEventListener('DOMContentLoaded', e => {
    createArrowButton()
    User.fakeLogin()
    ApiService.fetchSongs()

    const title = document.getElementById('title')
    const artist = document.getElementById('artist')
    const album = document.getElementById('album')
    const albumCover = document.getElementById('album_cover')
})

function createArrowButton() {
    let arrowButton = document.getElementById('arrow')
    arrowButton.addEventListener('click', e => {
        createForm()
        arrowButton.remove()
    })
}

function createForm() {
    let usersForm = document.getElementById('users-form')
    usersForm.innerHTML = '<form class="fade-in"> <input type="text" name="name" id="name" placeholder="Name"> <input type="submit" id="submit" value="Enter"> </form>'
}

function addSongButton() {
    let body = document.getElementById('container')
    let newContainer = document.createElement('div')
    newContainer.setAttribute('id', 'add-song-container')
    body.append(newContainer)
    let songButton = document.createElement('button')
    songButton.innerHTML = 'Add Song'
    newContainer.appendChild(songButton)
    songButton.addEventListener('click', e => {
        e.preventDefault()
        showSongForm()
        songButton.remove()
    })
}

function showSongForm() {
    let addSongContainer = document.getElementById('add-song-container')
    let songFormContainer = document.createElement('div')
    songFormContainer.setAttribute('id', 'song-form-container')
    addSongContainer.append(songFormContainer)
    let songForm = document.createElement('form')
    songForm.setAttribute('id', 'song-form')
    songForm.setAttribute('class', 'fade-in')
    songForm.innerHTML = '<input type="text" name="title" id="title" placeholder="Title">  <input type="text" name="artist" id="artist" placeholder="Artist">  <input type="text" name="album" id="album" placeholder="Album">  <input type="text" name="album_cover" id="album_cover" placeholder="Album cover"> <input type="submit" id="submit" value="Save">'
    songFormContainer.append(songForm)
    mountFormListener()
}

function mountFormListener() {
    let songForm = document.getElementById('song-form')
    songForm.addEventListener('submit', e => {
        e.preventDefault()
        const songObj = getSongData(e.target)
        console.log(songObj)
        createSong(songObj)
        songForm.reset()
    })
}

const getSongData = function(form) {
    return {
        title: title.value,
        artist: artist.value,
        album: album.value,
        album_cover: album_cover.value
    }
}

function createSong(songObj) {
    fetch('http://localhost:3000/api/v1/songs', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({song: songObj})
    })
}
