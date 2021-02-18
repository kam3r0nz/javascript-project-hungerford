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
    songButton.addEventListener('click', addSongForm)
}

function addSongForm() {
    let songsForm = document.createElement('div')
    songsForm.setAttribute('id', 'songs-form')
    console.log(songsForm)
}