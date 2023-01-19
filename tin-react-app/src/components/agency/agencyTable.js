import React from "react";
import AgencyTableRow from "./agencyTableRow";

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
                <AgencyTableRow agencyData={ag} key={ag.spec_id}/>
            ))}

            </tbody>

        </table>
    )
}

export default AgencyTable