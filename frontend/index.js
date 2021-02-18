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