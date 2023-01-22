import React from "react";
import {Link} from "react-router-dom";
import DeptTableRow from "./deptTableRow";
import { useTranslation } from 'react-i18next';

function DeptTable(props){
    const depts = props.deptList
    const { t, i18n } = useTranslation();
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>{t('dept.fields.name')}</th>
                <th>{t('dept.fields.email')}</th>
                <th>{t('list.actions.title')}</th>
            </tr>
            </thead>
            <tbody>
            {depts.map(dept => (
                <tr key={dept.name}>
                    <td title={t('dept.fields.name')}>
                        {dept.name}
                    </td>
                    <td title={t('dept.fields.email')}>
                        {dept.email}
                    </td>
                    <td className="list-actions-el">
                        <ul className="list-actions">
                            <li><Link className="btn2" to={`/dept/details/${dept.name}`}>{t('list.actions.details')}</Link></li>
                            <li><Link className="btn2" to={`/dept/edit/${dept.name}`}>{t('list.actions.edit')}</Link></li>
                            <li><button className="btn2" value={dept.name} onClick={() => props.handleDelete(dept.name)}>{t('list.actions.delete')}</button></li>
                        </ul>
                    </td>
                </tr>
                //<DeptTableRow deptData={dept} key={dept.name}/>
            ))}

            </tbody>

        </table>
    )
}

export default DeptTable