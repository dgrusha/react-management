import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";
import { useState, useEffect } from 'react';

export const EmpDesc = ()  => {
    let { empId } = useParams();
    let [emp, setEmp] = useState(null)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/emps/'+empId
                )
            ).json();

            setEmp(data);
        };

        dataFetch();
    }, [empId]);

    if (!emp) return 'loading';

    return (
        <>
        <main>
            <h2>EMP DESC</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Name:">
                        {emp.fname}
                    </td>
                </tr>
                <tr>
                    <td title="SurName:">
                        {emp.lname}
                    </td>
                </tr>
                <tr>
                    <td title="Email:">
                        {emp.email}
                    </td>
                </tr>
                <tr>
                    <td title="Date of birth:">
                        {emp.date_of_birth}
                    </td>
                </tr>

                </tbody>

            </table>

            <Link className="btn" to={`/emp/`}>
                Cancel
            </Link>
            <Link className="btn" to={`/emp/edit/${emp._id}`}>
                Edit
            </Link>

            <table className="table-list many-table">
                <thead>
                <tr>
                    <th>Date start</th>
                    <th>Date end</th>
                    <th>dept</th>
                </tr>
                </thead>
                <tbody>
                {emp.deptEmps.map(deptEmp => (
                    <tr>
                        <td title="date_s">
                            {deptEmp.start_contract}
                        </td>
                        <td title="date_e">
                            {deptEmp.start_contract}
                        </td>
                        <td title="dept">
                            {deptEmp.name}
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>


        </main>
        </>
    );
}

