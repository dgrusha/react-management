import React from "react";
import DeptEmpTableRow from "./deptEmpTableRow";
import {Link} from "react-router-dom";

function DeptEmpTable(props){
    const deptEmps = props.deptEmpList;
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>surname</th>
                <th>name</th>
                <th>name_dept</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {deptEmps.map(deptEmp => (
                <tr key={deptEmp._id}>
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
                            <li><button className="btn2" value={deptEmp._id} onClick={() => props.handleDelete(deptEmp._id)}>Delete</button></li>
                        </ul>
                    </td>
                </tr>
                //<DeptEmpTableRow deptEmpData={deptEmp} key={deptEmp._id}/>
            ))}

            </tbody>

        </table>
    )
}

export default DeptEmpTable