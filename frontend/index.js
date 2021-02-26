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
    arrowButton.addEventListener('click', e => {
        e.preventDefault()
        createUserForm()
        arrowButton.remove()
    })
}

function createUserForm() {
    let usersForm = document.getElementById('users-form')
    usersForm.innerHTML = '<form class="fade-in"> <input type="text" name="name" id="name" placeholder="Name" required> <input type="submit" id="submit" value="Enter"> </form>'
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
        createSongForm()
        songButton.remove()
    })
}

function createSongForm() {
    let addSongContainer = document.getElementById('add-song-container')
    let songFormContainer = document.createElement('div')
    songFormContainer.setAttribute('id', 'song-form-container')
    addSongContainer.append(songFormContainer)
    let songForm = document.createElement('form')
    songForm.setAttribute('id', 'song-form')
    songForm.className = 'fade-in'
    songForm.innerHTML = '<input type="text" name="title" id="title" placeholder="Title" required>  <input type="text" name="artist" id="artist" placeholder="Artist" required>  <input type="text" name="album" id="album" placeholder="Album" required>  <input type="url" name="album_cover" id="album_cover" placeholder="Album cover(url)" required> <input type="submit" id="submit" value="Save">'
    songFormContainer.append(songForm)
    mountSongFormListener()
}

function mountSongFormListener() {
    let songForm = document.getElementById('song-form')
    songForm.addEventListener('submit', e => {
        e.preventDefault()
        apiService.fetchCreateSong(e)
            .then(song => {
                let newSong = new Song(song)
                newSong.mountSongToDom()
            })
        const newSong = getSongData(e.target)
        songForm.reset()
    })
}

const getSongData = function(form) {
    const welcomeMessage = document.getElementById('welcome-message')
    const userId = welcomeMessage.dataset.id
    return {
        title: title.value,
        artist: artist.value,
        album: album.value,
        album_cover: album_cover.value,
        user_id: userId
    }
}

function deleteSongFetch(id) {
    fetch(`http://localhost:3000/api/v1/songs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(resp => resp.json())
        .then(data => ApiService.fetchSongs())
}

function mountDeleteListener() {
    const deleteButtons = document.getElementsByClassName('delete')
    for (const deleteButton of deleteButtons) {
        deleteButton.addEventListener('click', e => {
            e.preventDefault()
            const id = e.target.closest('.song-box').getAttribute('data-id')
            deleteSongFetch(id)
            e.target.closest('.song-box').remove()
        })
    }
}