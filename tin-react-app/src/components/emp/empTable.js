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
                <EmpTableRow empData={emp} key={emp._id}/>
            ))}

            </tbody>

        </table>
    )
}

export default EmpTable