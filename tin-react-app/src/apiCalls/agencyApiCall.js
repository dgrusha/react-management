const deptBaseUrl = 'http://localhost:3000/api/agencys'

export function getAgencyApiCall() {
    return fetch(deptBaseUrl);
}