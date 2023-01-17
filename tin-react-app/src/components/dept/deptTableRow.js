import React from "react";
import {Link} from "react-router-dom";

function DeptTableRow(props){
    const dept = props.deptData
    return (
        <tr>
            <td title="Name:">
                {dept.name}
            </td>
            <td title="Email:">
                {dept.email}
            </td>
            <td className="list-actions-el">
                <ul className="list-actions">
                    <li><Link className="btn2" to={`/dept/details/${dept.name}`}>Details</Link></li>
                    <li><Link className="btn2" to={`/dept/edit/${dept.name}`}>Edit</Link></li>
                    <li><Link className="btn2" to={`/dept/delete/${dept.name}`}>Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default DeptTableRow