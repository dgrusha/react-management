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
                <DeptTableRow deptData={dept} key={dept.name}/>
            ))}

            </tbody>

        </table>
    )
}

export default DeptTable