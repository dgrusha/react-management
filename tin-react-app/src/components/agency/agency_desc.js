import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function AgencyDesc() {
    let { spec_id } = useParams()
    spec_id = parseInt(spec_id)
    let [agency, setAgency] = useState(null)
    const { t, i18n } = useTranslation();

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
            <h2>{t('agency.titles.desc')}</h2>
            <table className="table-list desc-table">
                <tbody>
                <tr>
                    <td title={t('agency.fields.phone')}>
                        {agency.phone}
                    </td>
                </tr>
                <tr>
                    <td title={t('agency.fields.tax')}>
                        {agency.tax_number}
                    </td>
                </tr>
                <tr>
                    <td title={t('agency.fields.spec')}>
                        {agency.specialization}
                    </td>
                </tr>
                <tr>
                    <td title={t('agency.fields.doc')}>
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
                            <th>{t('agency.fields.name')}</th>
                            <th>{t('agency.fields.adress')}</th>
                            <th>{t('agency.fields.email')}</th>
                        </tr>
                        </thead>
                        <tbody>
                        {agency.depts.map(dept => (
                            <tr>
                                <td title={t('agency.fields.name')}>
                                    {dept.name}
                                </td>
                                <td title={t('agency.fields.adress')}>
                                    {dept.adress}
                                </td>
                                <td title={t('agency.fields.email')}>
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