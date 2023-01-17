const deptBaseUrl = 'http://localhost:3000/api/depts'

export function getDeptApiCall() {
    return fetch(deptBaseUrl);
}