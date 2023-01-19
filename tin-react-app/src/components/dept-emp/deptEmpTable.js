import React from "react";
import DeptEmpTableRow from "./deptEmpTableRow";

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
                <DeptEmpTableRow deptEmpData={deptEmp} key={deptEmp._id}/>
            ))}

            </tbody>

        </table>
    )
}

export default DeptEmpTable