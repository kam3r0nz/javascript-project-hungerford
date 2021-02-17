class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    findUser(user) {
        return fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({user})
        })
    }

    renderUser() {
        let usersDiv = document.getElementById('users-container')
        usersDiv.innerHTML += `<ul><li>${this.name} - ${this.email}</li></li>`
    }
}