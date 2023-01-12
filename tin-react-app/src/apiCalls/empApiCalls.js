import {employeeDetailsList} from './empMockData'

const empBaseUrl = 'http://localhost:3000/api/emps'

export function getEmployeesApiCall() {
    return fetch(empBaseUrl);
}

export function getEmployeeByIdApiCall(empId) {
    const url = empBaseUrl + '/' + empId.toString()
    console.log(321111111111);
    console.log(url);
    return fetch(url);
}