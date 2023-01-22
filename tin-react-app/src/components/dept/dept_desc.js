import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

function DeptDesc() {
    let { deptId } = useParams();
    let [dept, setDept] = useState(null);
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/depts/'+deptId
                )
            ).json();

            setDept(data);
        };

        dataFetch();
    }, [deptId]);

    if (!dept) return 'loading';

    return (
        <main>
            <h2>{t('dept.titles.desc')}</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title={t('dept.fields.name')}>
                        {dept.name}
                    </td>
                </tr>
                <tr>
                    <td title={t('dept.fields.adress')}>
                        {dept.adress}
                    </td>
                </tr>
                <tr>
                    <td title={t('dept.fields.email')}>
                        {dept.email}
                    </td>
                </tr>
                <tr>
                    <td title={t('dept.fields.agency')}>
                        {dept.agencys.specialization}
                    </td>
                </tr>
                <tr>
                    <td title={t('dept.fields.agp')}>
                        {dept.agencys.phone}
                    </td>
                </tr>

                </tbody>

            </table>

            <Link className="btn" to={`/dept/`}>
                {t('dept.btns.cancel')}
            </Link>
            <Link className="btn" to={`/dept/edit/${dept.name}`}>
                {t('dept.btns.edit')}
            </Link>

        </main>
    );
}

export default DeptDesc;