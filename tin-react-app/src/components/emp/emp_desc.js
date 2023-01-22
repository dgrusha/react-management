import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const EmpDesc = ()  => {
    let { empId } = useParams();
    let [emp, setEmp] = useState(null)
    const { t, i18n } = useTranslation();

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
            <h2>{t('emp.titles.desc')}</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title={t('emp.fields.firstName')}>
                        {emp.fname}
                    </td>
                </tr>
                <tr>
                    <td title={t('emp.fields.lastName')}>
                        {emp.lname}
                    </td>
                </tr>
                <tr>
                    <td title={t('emp.fields.email')}>
                        {emp.email}
                    </td>
                </tr>
                <tr>
                    <td title={t('emp.fields.dob')}>
                        {emp.date_of_birth}
                    </td>
                </tr>

                </tbody>

            </table>

            <Link className="btn" to={`/emp/`}>
                {t('emp.btns.cancel')}
            </Link>
            <Link className="btn" to={`/emp/edit/${emp._id}`}>
                {t('emp.btns.edit')}
            </Link>

            <table className="table-list many-table">
                <thead>
                <tr>
                    <th>{t('emp.fields.ds')}</th>
                    <th>{t('emp.fields.de')}</th>
                    <th>{t('emp.fields.dept')}</th>
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

