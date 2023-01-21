import React from "react";
import {Link} from "react-router-dom";
import EmpTableRow from "./empTableRow";

function EmpTable(props){
    const emps = props.empList
    return (
        <table className="table-list">
            <thead>
            <tr>
                <th>surname</th>
                <th>name</th>
                <th>action</th>
            </tr>
            </thead>
            <tbody>
            {emps.map(emp => (
                <tr key={emp._id}>
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
                            <li><button className="btn2" value={emp._id} onClick={() => props.handleDelete(emp._id)}>Delete</button></li>
                        </ul>
                    </td>
                </tr>
                //<EmpTableRow empData={emp} key={emp._id} openWin={props.modalWin}/>
            ))}

            </tbody>

        </table>
    )
}

export default EmpTable