import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function DeptForm() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>NEW DEPT</h2>
            <form>


                <div className="group-bl">
                    <label htmlFor="name">Name *:</label>
                    <input className="inputs" type="text" name="name" id="name" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="email">Email *:</label>
                    <input className="inputs" type="text" name="email" id="email" required/>
                </div>


                <div className="group-bl">
                    <label htmlFor="adress">Adress*:</label>
                    <input className="inputs" type="text" id="adress" name="Adress" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="ags">Agency*:</label>
                    <select className="inputs" name="ags" id="ags">
                        <option value="1">agency1</option>
                        <option value="2">agency2</option>
                    </select>
                </div>

                <div>
                    <input className="btn" type="submit" value="ADD"/>
                        <a className="btn" href="./dept.html">
                            CANCEL
                        </a>
                        <p id="ErrSummary"></p>
                </div>
            </form>


        </main>
    );
}

export default DeptForm;