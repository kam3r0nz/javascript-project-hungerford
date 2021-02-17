window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')

    fetch('http://localhost:3000/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))
})