class User {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }

    renderuser() {
        let usersDiv = document.getElementById('users-container')
        usersDiv.innerHTML += `<ul><li>${this.name} - ${this.email}</li></li>`
    }
}