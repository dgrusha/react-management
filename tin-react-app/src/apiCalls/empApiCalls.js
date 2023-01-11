import { employeeList, employeeDetailsList } from './empMockData'

export function getEmployeesApiCall() {
    return employeeList;
}

export function getEmployeeByIdApiCall(empId) {
    return employeeDetailsList.find(emp => emp._id === empId);
}