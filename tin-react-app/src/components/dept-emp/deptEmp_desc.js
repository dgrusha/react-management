import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function DeptEmpDesc() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>DEPT-EMP DETAILS</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Name:">
                        J
                    </td>
                </tr>
                <tr>
                    <td title="SurName:">
                        J
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        Email@em.em
                    </td>
                </tr>
                <tr>
                    <td title="Date start:">
                        11.22.2002
                    </td>
                </tr>
                <tr>
                    <td title="Date end:">
                        11.22.2002
                    </td>
                </tr>
                <tr>
                    <td title="Name Dept:">
                        DEPT1
                    </td>
                </tr>

                </tbody>

            </table>
            <a className="btn" href="./dept-emp-edit.html">
                Edit
            </a>
            <a className="btn" href="./dept-emp.html">
                Cancel
            </a>
            <br/>
                <table className="table-list desc-table">
                    <tbody>
                    <tr>
                        <td title="Name:">
                            J
                        </td>
                    </tr>
                    <tr>
                        <td title="SurName:">
                            J
                        </td>
                    </tr>
                    <tr>
                        <td title="Email:">
                            Email@em.em
                        </td>
                    </tr>
                    <tr>
                        <td title="Date start:">
                            11.22.2022
                        </td>
                    </tr>
                    <tr>
                        <td title="Date end:">
                            11.22.2089
                        </td>
                    </tr>
                    <tr>
                        <td title="Name Dept:">
                            DEPT1
                        </td>
                    </tr>

                    </tbody>

                </table>
                <a className="btn" href="./dept-emp-edit.html">
                    Edit
                </a>
        </main>
    );
}

export default DeptEmpDesc;