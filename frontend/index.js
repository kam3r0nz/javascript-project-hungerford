window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')
    fetchSongs()
})

function fetchSongs() {
    fetch('http://localhost:3000/api/v1/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))
}