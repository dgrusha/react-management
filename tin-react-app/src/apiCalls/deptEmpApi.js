const deptBaseUrl = 'http://localhost:3000/api/deptEmps'

export function getDeptEmpsApiCall() {
    return fetch(deptBaseUrl);
}