const baseUrl = 'http://localhost:3000/api/auth'

export function authApiCall(user) {
    const url = `http://localhost:3000/api/auth/login`
    console.log(user)
    const userString = JSON.stringify(user)
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: userString
    }
    const promise = fetch(url, options);
    return promise;
}