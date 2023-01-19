import React from "react";
import {Link} from "react-router-dom";

function DeptEmpTableRow(props){
    const deptEmp = props.deptEmpData
    return (
        <tr>
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
                    <li><Link className="btn2" to={`/deptEmp/details/${deptEmp.name}/${deptEmp.emp_id}`}>Details</Link></li>
                    <li><Link className="btn2" to={`/deptEmp/edit/${deptEmp._id}`}>Edit</Link></li>
                    <li><Link className="btn2" to={`/deptEmp/delete/${deptEmp._id}`}>Delete</Link></li>
                </ul>
            </td>
        </tr>
    )
}

export default DeptEmpTableRow