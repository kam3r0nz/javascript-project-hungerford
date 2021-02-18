const apiService = new ApiService()

window.addEventListener('DOMContentLoaded', e => {
    createArrowButton()
    User.fakeLogin()
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
        addSongForm()
    })
}

function addSongForm() {
    let body = document.getElementById('container')
    let songsForm = document.createElement('div')
    songsForm.setAttribute('id', 'songs-form')
    songsForm.innerHTML = '<form class="fade-in"> <input type="text" name="title" id="title" placeholder="Title"> <br> <input type="text" name="artist" id="artist" placeholder="Artist"> <br> <input type="text" name="album" id="album" placeholder="Album"> <br> <input type="text" name="album_cover" id="album_cover" placeholder="Album cover"> <br> <input type="submit" id="submit" value="Save"> </form>'
    body.append(songsForm)
}