import React from "react";
import {Link} from "react-router-dom";

function EmpDetailTable(props){
    const emp = props.emp
    return (
        <table className="table-list desc-table">
            <tbody>
            <tr>
                <td title="Name:">
                    {emp.lname}
                </td>
            </tr>
            <tr>
                <td title="SurName:">
                    {emp.fname}
                </td>
            </tr>
            <tr>
                <td title="Email:">
                    MMM
                </td>
            </tr>
            <tr>
                <td title="Date of birth:">
                    11.22.2023
                </td>
            </tr>

            </tbody>

        </table>
    )
}

export default EmpDetailTable