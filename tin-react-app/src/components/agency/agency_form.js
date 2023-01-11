import React from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function AgencyForm() {
    let { empId } = useParams()
    empId = parseInt(empId)
    const emp = getEmployeeByIdApiCall(empId)
    return (
        <main>
            <h2>NEW AGENCY</h2>
            <form>

                <div className="group-bl">
                    <label htmlFor="date_creat">date_creation *:</label>
                    <input className="inputs" type="date" name="date_creat" id="date_creat" />
                </div>

                <div className="group-bl">
                    <label htmlFor="phone">phone*:</label>
                    <input className="inputs" type="text" id="phone" name="phone" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="spec">specialization*:</label>
                    <input className="inputs" type="text" id="spec" name="spec" required/>
                </div>

                <div className="group-bl">
                    <label htmlFor="tax_number">tax_number*:</label>
                    <input className="inputs" type="text" id="tax_number" name="tax_number" required/>
                </div>

                <div>
                    <input className="btn" type="submit" value="ADD"/>
                        <a className="btn" href="./agency.html">
                            CANCEL
                        </a>
                        <p id="ErrSummary"></p>
                </div>
            </form>


        </main>
    );
}

export default AgencyForm;