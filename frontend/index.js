window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')
    fetchSongs()
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
        
    })
}