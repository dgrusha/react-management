import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function DeptEmpDesc() {
    let { deId1, deId2 } = useParams();
    let [deptEmp, setDeptEmp] = useState(null)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/deptEmps/'+deId1 + "/" + deId2
                )
            ).json();

            setDeptEmp(data);
        };

        dataFetch();
        console.log(deptEmp);
    }, [deId1, deId2]);

    if (!deptEmp) return 'loading';
    let main = <>
        <main>
            <h2>DEPT-EMP DETAILS</h2>
            {deptEmp.map(item => (
                <table className="table-list desc-table">
                    <tbody>
                    <tr>
                        <td title="Name:">
                            {item.emps.fname}
                        </td>
                    </tr>
                    <tr>
                        <td title="Surname:">
                            {item.emps.lname}
                        </td>
                    </tr>
                    <tr>
                        <td title="Email:">
                            {item.emps.email}
                        </td>
                    </tr>
                    <tr>
                        <td title="Date start:">
                            {item.start_contract.substring(0, 10)}
                        </td>
                    </tr>
                    <tr>
                        <td title="Date end:">
                            {item.end_contract ?
                                (
                                    item.end_contract.substring(0, 10)
                                ) :
                                <p>Brak</p>
                            }

                        </td>
                    </tr>
                    <tr>
                        <td title="Name Dept:">
                            {item.name}
                        </td>
                    </tr>
                    <tr>
                        <Link className="btn" to={`/deptEmp/edit/${item._id}`}>
                            Edit
                        </Link>
                    </tr>

                    </tbody>

                </table>


                )
            )}

            <Link className="btn" to={`/deptEmp/`}>
                Cancel
            </Link>
        </main>
    </>;
    return main;
}

export default DeptEmpDesc;