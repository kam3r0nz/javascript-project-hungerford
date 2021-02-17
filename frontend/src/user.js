document.addEventListener('DOMContentLoaded', function() {
    User.createUser()
})

class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    static createUser() {
        let newUserForm = document.getElementById('users-form')
        newUserForm.addEventListener('submit', e => {
            e.preventDefault()
            fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
                },
                body: JSON.stringify({user: {name: e.target.children[0].value}})
                     
            })
                .then(resp => resp.json())
                .then(user => {
                    let newUser = new User(user)
                    console.log(newUser)
                    newUser.displayUser()
                })
        })
    }

    displayUser() {
        let body = document.getElementById('container')
        body.innerHTML = ''
        let userGreeting = document.createElement('p')
        userGreeting.setAttribute('data-id', this.id)
        userGreeting.innerHTML = `<h1>Welcome, ${this.name}!</h1>`
        body.append(userGreeting)
    }
}