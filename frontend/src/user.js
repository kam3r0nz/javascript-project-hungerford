document.addEventListener('DOMContentLoaded', function() {
    User.createUser()
})

class User {
    constructor(user) {
        this.id = user.id
        this.name = user.name
    }

    static createUser() {
        let newUserForm = document.getElementById('users-form')
        newUserForm.addEventListener('submit', e => {
            e.preventDefault()
            fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({user: {name: e.target.children[0].value}})
                     
            })
                .then(resp => resp.json())
                .then(user => {
                    console.log(user)
                    let newUser = new User(user)
                    newUser.displayUser()
                })
        })
    }

    displayUser() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let welcomeMessage = document.createElement('p')
        welcomeMessage.setAttribute('data-set', this.id)
        welcomeMessage.innerHTML = `<h1>Welcome, ${this.name}!</h1>`
        body.append(welcomeMessage)
    }
}