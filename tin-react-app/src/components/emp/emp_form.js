import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function EmpForm() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>NEW EMP</h2>
            <form>

                <div className="group-bl">
                    <label htmlFor="sur">Surname *:</label>
                    <input className="inputs" type="text" name="sur" id="sur" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="name">Name *:</label>
                    <input className="inputs" type="text" name="name" id="name" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="email">Email *:</label>
                    <input className="inputs" type="text" name="email" id="email" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="birthday">Birthday*:</label>
                    <input className="inputs" type="date" id="birthday" name="birthday" required/>
                </div>

                <div>
                    <input className="btn" type="submit" value="ADD"/>
                        <a className="btn" href="./emp.html">
                            CANCEL
                        </a>
                        <p id="ErrSummary"/>
                </div>
            </form>
        </main>
    );
}

export default EmpForm;