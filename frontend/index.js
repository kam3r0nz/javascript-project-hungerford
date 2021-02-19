const apiService = new ApiService()

window.addEventListener('DOMContentLoaded', e => {
    createArrowButton()
    User.fakeLogin()

    const title = document.getElementById('title')
    const artist = document.getElementById('artist')
    const album = document.getElementById('album')
    const albumCover = document.getElementById('album_cover')
})

function createArrowButton() {
    let arrowButton = document.getElementById('arrow')
    arrowButton.addEventListener('click', createForm)
}

function createForm() {
    let usersForm = document.getElementById('users-form')
    usersForm.innerHTML = '<form class="fade-in"> <input type="text" name="name" id="name" placeholder="Name"> <input type="submit" id="submit" value="Enter"> </form>'
}

function addSongButton() {
    let body = document.getElementById('container')
    let songButton = document.createElement('button')
    songButton.innerHTML = 'Add Song'
    body.appendChild(songButton)
    songButton.addEventListener('click', e => {
        e.preventDefault()
        showSongForm()
        songButton.remove()
    })
}

function showSongForm() {
    let body = document.getElementById('container')
    let songFormContainer = document.createElement('div')
    songFormContainer.setAttribute('id', 'song-form-container')
    body.append(songFormContainer)
    let songForm = document.createElement('form')
    songForm.setAttribute('id', 'song-form')
    songForm.setAttribute('class', 'fade-in')
    songForm.innerHTML = '<input type="text" name="title" id="title" placeholder="Title">  <input type="text" name="artist" id="artist" placeholder="Artist"> <br> <input type="text" name="album" id="album" placeholder="Album">  <input type="text" name="album_cover" id="album_cover" placeholder="Album cover"> <br> <input type="submit" id="submit" value="Save">'
    songFormContainer.append(songForm)
    mountFormListener()
}

function mountFormListener() {
    let songForm = document.getElementById('song-form')
    songForm.addEventListener('submit', e => {
        e.preventDefault()
        const songObj = getSongData(e.target)
        console.log(songObj)
    })
}

const getSongData = function(form) {
    return {
        title: title.value,
        artist: artist.value,
        album: album.value,
        albumCover: album_cover.value
    }
}