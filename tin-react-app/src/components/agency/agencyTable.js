import React from "react";
import {Link} from "react-router-dom";
import { useTranslation } from 'react-i18next';

function AgencyTable(props){
    const { t, i18n } = useTranslation();
    const agencys = props.agencyList
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>{t('agency.fields.phone')}</th>
                <th>{t('agency.fields.spec')}</th>
                <th>{t('list.actions.title')}</th>
            </tr>
            </thead>
            <tbody>
            {agencys.map(ag => (
                <tr key={ag.spec_id}>
                    <td title={t('agency.fields.phone')}>
                        {ag.phone}
                    </td>
                    <td title={t('agency.fields.spec')}>
                        {ag.specialization}
                    </td>
                    <td className="list-actions-el">
                        <ul className="list-actions">
                            <li><Link className="btn2" to={`/agency/details/${ag.spec_id}`}>{t('list.actions.details')}</Link></li>
                            <li><Link className="btn2" to={`/agency/edit/${ag.spec_id}`}>{t('list.actions.edit')}</Link></li>
                            <li><button className="btn2" value={ag.spec_id} onClick={() => props.handleDelete(ag.spec_id)}>{t('list.actions.delete')}</button></li>
                        </ul>
                    </td>
                </tr>
                //<AgencyTableRow agencyData={ag} key={ag.spec_id}/>
            ))}

            </tbody>

        </table>
    )
}

export default AgencyTable