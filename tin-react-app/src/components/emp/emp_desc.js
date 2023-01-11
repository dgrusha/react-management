import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function EmpDesc() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>EMP DESC</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Name:">
                        {emp.name}
                    </td>
                </tr>
                <tr>
                    <td title="SurName:">
                        {emp.surname}
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        Email@em.em
                    </td>
                </tr>
                <tr>
                    <td title="Date of birth:">
                        11.22.2002
                    </td>
                </tr>

                </tbody>

            </table>

            <a className="btn" href="./emp.html">
                Cancel
            </a>
            <a className="btn" href="./emp_form_edit.html">
                Edit
            </a>

            <table className="table-list many-table">
                <thead>
                <tr>
                    <th>Date start</th>
                    <th>Date end</th>
                    <th>dept</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td title="date_s">
                        20.02.2022
                    </td>
                    <td title="date_e">
                        20.02.2023
                    </td>
                    <td title="dept">
                        A
                    </td>
                </tr>
                <tr>
                    <td title="date_s">
                        20.02.2011
                    </td>
                    <td title="date_e">
                        20.02.2012
                    </td>
                    <td title="dept">
                        B
                    </td>
                </tr>
                <tr>
                    <td title="date_s">
                        20.02.2011
                    </td>
                    <td title="date_e">
                        20.02.2012
                    </td>
                    <td title="dept">
                        C
                    </td>
                </tr>

                </tbody>

            </table>


        </main>
    );
}

export default EmpDesc;