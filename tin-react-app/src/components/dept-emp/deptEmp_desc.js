import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function DeptEmpDesc() {
    let { deId1, deId2 } = useParams();
    let [deptEmp, setDeptEmp] = useState(null)
    const { t, i18n } = useTranslation();

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
            <h2>{t('deptEmp.titles.desc')}</h2>
            {deptEmp.map(item => (
                <table className="table-list desc-table">
                    <tbody>
                    <tr>
                        <td title={t('deptEmp.fields.firstName')}>
                            {item.emps.fname}
                        </td>
                    </tr>
                    <tr>
                        <td title={t('deptEmp.fields.lastName')}>
                            {item.emps.lname}
                        </td>
                    </tr>
                    <tr>
                        <td title={t('deptEmp.fields.email')}>
                            {item.emps.email}
                        </td>
                    </tr>
                    <tr>
                        <td title={t('deptEmp.fields.dos')}>
                            {item.start_contract.substring(0, 10)}
                        </td>
                    </tr>
                    <tr>
                        <td title={t('deptEmp.fields.doe')}>
                            {item.end_contract ?
                                (
                                    item.end_contract.substring(0, 10)
                                ) :
                                <p>Brak</p>
                            }

                        </td>
                    </tr>
                    <tr>
                        <td title={t('deptEmp.fields.ndept')}>
                            {item.name}
                        </td>
                    </tr>
                    <tr>
                        <Link className="btn" to={`/deptEmp/edit/${item._id}`}>
                            {t('deptEmp.btns.edit')}
                        </Link>
                    </tr>

                    </tbody>

                </table>


                )
            )}

            <Link className="btn" to={`/deptEmp/`}>
                {t('deptEmp.btns.cancel')}
            </Link>
        </main>
    </>;
    return main;
}

export default DeptEmpDesc;