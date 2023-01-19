import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function AgencyDesc() {
    let { spec_id } = useParams()
    spec_id = parseInt(spec_id)
    let [agency, setAgency] = useState(null)

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/agencys/'+spec_id
                )
            ).json();

            setAgency(data);
        };

        dataFetch();
    }, [spec_id]);

    if (!agency) return 'loading';

    return (
        <main>
            <h2>AGENCY</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title="Phone:">
                        {agency.phone}
                    </td>
                </tr>
                <tr>
                    <td title="TaxNumber:">
                        {agency.tax_number}
                    </td>
                </tr>
                <tr>
                    <td title="specialization:">
                        {agency.specialization}
                    </td>
                </tr>
                <tr>
                    <td title="Date created:">
                        {agency.date_of_creation}
                    </td>
                </tr>

                </tbody>

            </table>
            <br/>
                <h3>DEPARTMENTS</h3>
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
                        {agency.depts.map(dept => (
                            <tr>
                                <td title="Name:">
                                    {dept.name}
                                </td>
                                <td title="Adress:">
                                    {dept.adress}
                                </td>
                                <td title="Email:">
                                    {dept.email}
                                </td>
                            </tr>
                        ))}


                        </tbody>
                    </table>
                </div>
            <Link className="btn" to={`/agency/`}>
                Cancel
            </Link>
            <Link className="btn" to={`/agency/edit/${agency.spec_id}`}>
                Edit
            </Link>
        </main>
    );
}

export default AgencyDesc;