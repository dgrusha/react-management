import React from "react";
import {Link} from "react-router-dom";
import DeptTableRow from "./deptTableRow";

function DeptTable(props){
    const depts = props.deptList
    console.log(depts)
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>name</th>
                <th>email</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {depts.map(dept => (
                <tr key={dept.name}>
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
                            <li><button className="btn2" value={dept.name} onClick={() => props.handleDelete(dept.name)}>Delete</button></li>
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