window.addEventListener('DOMContentLoaded', e => {
    createArrowButton()
})

function createArrowButton() {
    let arrowButton = document.getElementById('arrow')
    arrowButton.addEventListener('click', createForm)
}

function createForm() {
    let usersForm = document.getElementById('users-form')
    usersForm.innerHTML = '<form class="fade-in"> <input type="text" name="name" id="name" placeholder="Name"> <br> <input type="email" name="email" id="email" placeholder="Email"> <input type="submit" id="submit" value="Enter"> </form>'
}