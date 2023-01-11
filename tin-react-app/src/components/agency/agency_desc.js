import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function AgencyDesc() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>AGENCY</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Phone:">
                        J
                    </td>
                </tr>
                <tr>
                    <td title="TaxNumber:">
                        321432524
                    </td>
                </tr>
                <tr>
                    <td title="specialization:">
                        dsadsadasdas
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        Email@em.em
                    </td>
                </tr>

                </tbody>

            </table>
            <br/>
                <h3>DEPARTMENTS (ONE TO MANY)</h3>
                <div className="tablesdivel">
                    <table className="table-list table-dept">
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>adress</th>
                            <th>email</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td title="Name:">
                                dsada
                            </td>
                            <td title="Adress:">
                                Jdsadsa
                            </td>
                            <td title="Email:">
                                Email@em.em
                            </td>
                        </tr>
                        <tr>
                            <td title="Name:">
                                fghfd
                            </td>
                            <td title="Adress:">
                                gfbdfggfd
                            </td>
                            <td title="Email:">
                                Emai2l@em.em
                            </td>
                        </tr>
                        <tr>
                            <td title="Name:">
                                fghewqfd
                            </td>
                            <td title="Adress:">
                                gfbewqdfggfd
                            </td>
                            <td title="Email:">
                                Emai23l@em.em
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
                <a className="btn" href="./agency.html">
                    Cancel
                </a>
                <a className="btn" href="./agency_form_edit.html">
                    Edit
                </a>
        </main>
    );
}

export default AgencyDesc;