class ApiService {
    constructor() {
        this.baseUrl = 'http://localhost:3000/api/v1'
    }

    findOrCreateUser(e) {
        return fetch('http://localhost:3000/api/v1/users', {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify({user: {name: e.target.children[0].value}})
                     
            })
                .then(resp => {
                    return resp.json()
                })
    }
}