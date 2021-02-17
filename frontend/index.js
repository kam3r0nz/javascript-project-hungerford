window.addEventListener('DOMContentLoaded', e => {
    console.log('Window loaded')

    fetch('http://localhost:3000/api/v1/songs')
        .then(resp => resp.json())
        .then(data => console.log(data))


    
    const enterLink = document.getElementById('enter')
    enterLink.addEventListener('click', e => {
        e.preventDefault()
        console.log('this has been clicked')
        const container = document.getElementById('container')
        const newForm = document.createElement('form')
        newForm.className = 'login fade-in'
        newForm.innerHTML = '<input type="text" id="name" placeholder="Name"> <input type="email" id="email" placeholder="Email"> <input type="submit" value="Enter">'
        container.appendChild(newForm)
    })
})