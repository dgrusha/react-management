import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function DeptDesc() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>DEPT DESC</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Name:">
                        J
                    </td>
                </tr>
                <tr>
                    <td title="Adress:">
                        J
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        Email@em.em
                    </td>
                </tr>

                </tbody>

            </table>

            <a className="btn" href="./dept.html">
                Cancel
            </a>
            <a className="btn" href="./dept_form_edit.html">
                Edit
            </a>

        </main>
    );
}

export default DeptDesc;