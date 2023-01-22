import React from "react";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function DeptEmpTable(props){
    const { t, i18n } = useTranslation();
    const deptEmps = props.deptEmpList;
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>{t('deptEmp.fields.lastName')}</th>
                <th>{t('deptEmp.fields.firstName')}</th>
                <th>{t('deptEmp.fields.dept')}</th>
                <th>{t('list.actions.title')}</th>
            </tr>
            </thead>
            <tbody>
            {deptEmps.map(deptEmp => (
                <tr key={deptEmp._id}>
                    <td title="Name:">
                        {deptEmp.emps.fname}
                    </td>
                    <td title="SurName:">
                        {deptEmp.emps.lname}
                    </td>
                    <td title="Name_dept:">
                        {deptEmp.name}
                    </td>
                    <td className="list-actions-el">
                        <ul className="list-actions">
                            <li><Link className="btn2" to={`/deptEmp/details/${deptEmp.name}/${deptEmp.emp_id}`}>{t('list.actions.details')}</Link></li>
                            <li><Link className="btn2" to={`/deptEmp/edit/${deptEmp._id}`}>{t('list.actions.edit')}</Link></li>
                            <li><button className="btn2" value={deptEmp._id} onClick={() => props.handleDelete(deptEmp._id)}>{t('list.actions.delete')}</button></li>
                        </ul>
                    </td>
                </tr>
                //<DeptEmpTableRow deptEmpData={deptEmp} key={deptEmp._id}/>
            ))}

            </tbody>

        </table>
    )
}

export default DeptEmpTable