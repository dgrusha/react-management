import React from "react";
import {Link} from "react-router-dom";

function AgencyTableRow(props){
    const ag = props.agencyData
    return (
        <tr>
            <td title="Phone">
                {ag.phone}
            </td>
            <td title="Specialization">
                {ag.specialization}
            </td>
            <td className="list-actions-el">
                <ul className="list-actions">
                    <li><Link className="btn2" to={`/agency/details/${ag.spec_id}`}>Details</Link></li>
                    <li><Link className="btn2" to={`/agency/edit/${ag.spec_id}`}>Edit</Link></li>
                    <li><Link className="btn2" to={`/agency/delete/${ag.spec_id}`}>Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default AgencyTableRow