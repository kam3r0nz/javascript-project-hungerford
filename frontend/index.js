window.addEventListener('DOMContentLoaded', e => {
    fetchUsers()
})

const baseUrl = 'http://localhost:3000/api/v1'

function fetchUsers() {
    fetch(`${baseUrl}/users`)
        .then(resp => resp.json())
        .then(users => {
            for (const user of users) {
                let u = new User(user.id, user.name, user.email)
                u.renderuser()
            }
        })
}