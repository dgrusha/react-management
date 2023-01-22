export function getCurrentUser() {
    let userJSON
    const user = sessionStorage.getItem('user')
    try {
        userJSON = JSON.parse(user)
    } catch (e) {
        return undefined
    }
    return userJSON
}

export function isAuthenticated() {
    const user = getCurrentUser()
    if(user) {
        return true
    }
    return false
}