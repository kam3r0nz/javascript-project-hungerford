window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')

    fetch('http://localhost:3000/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))


    const enterLink = document.getElementById('enter')
    enterLink.addEventListener('click', e => {
        e.preventDefault()
        console.log('this has been clicked')
    })
})