import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function DeptEmpForm() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>NEW DEPT</h2>
            <form>


                <div className="group-bl">
                    <label htmlFor="workers">Name EMP*:</label>
                    <select className="inputs" name="workers" id="workers">
                        <option value="1">JOHNE SSSSSSSS</option>
                        <option value="2">DMYTRO ADADADA</option>
                    </select>
                </div>

                <div className="group-bl">
                    <label htmlFor="date1">DATE1 *:</label>
                    <input className="inputs" type="date" id="date1" name="date1" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="date2">DATE2 *:</label>
                    <input className="inputs" type="date" id="date2" name="date2" required/>
                </div>


                <div className="group-bl">
                    <label htmlFor="depts">Name dept*:</label>
                    <select className="inputs" name="depts" id="depts">
                        <option value="1">MARKET PLACE</option>
                        <option value="2">MARKET PLACE2</option>
                    </select>
                </div>

                <div>
                    <input className="btn" type="submit" value="ADD"/>
                        <a className="btn" href="./dept-emp.html">
                            CANCEL
                        </a>
                        <p id="ErrSummary"></p>
                </div>
            </form>


        </main>
    );
}

export default DeptEmpForm;