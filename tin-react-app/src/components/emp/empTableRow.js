import React from "react";
import {Link} from "react-router-dom";

function EmpTableRow(props){
    const emp = props.empData
    return (
        <tr>
            <td title="surname">
                {emp.fname}
            </td>
            <td title="name">
                {emp.lname}
            </td>
            <td className="list-actions-el">
                <ul className="list-actions">
                    <li><Link className="btn2" to={`/emp/details/${emp._id}`}>Details</Link></li>
                    <li><Link className="btn2" to={`/emp/edit/${emp._id}`}>Edit</Link></li>
                    <li><Link className="btn2" to={`/emp/delete/${emp._id}`}>Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default EmpTableRow