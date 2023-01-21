import React from "react";
import AgencyTableRow from "./agencyTableRow";
import {Link} from "react-router-dom";

function AgencyTable(props){
    const agencys = props.agencyList
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>Phone</th>
                <th>Specialization</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {agencys.map(ag => (
                <tr key={ag.spec_id}>
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
                            <li><button className="btn2" value={ag.spec_id} onClick={() => props.handleDelete(ag.spec_id)}>Delete</button></li>
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