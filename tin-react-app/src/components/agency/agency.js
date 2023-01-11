import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function Agency() {
    const empList = getEmployeesApiCall()
    return (
        <main>
            <h2>AGENCY</h2>
            <div className="tablesdiv">
                <div className="tablesdivel">
                    <table className="table-list table-agency">
                        <thead>
                        <tr>
                            <th>phone</th>
                            <th>specialization</th>
                            <th>action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td title="Phone">
                                +38321312312
                            </td>
                            <td title="Specialization">
                                dadas
                            </td>
                            <td>
                                <ul className="list-actions">
                                    <li><Link className="btn2" to={`/agency/details/1`}>Details</Link></li>
                                    <li><Link className="btn2" to={`/agency/edit/1`}>Edit</Link></li>
                                    <li><Link className="btn2" to={`/agency/delete/1`}>Delete</Link></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td title="Phone">
                                +383213231312
                            </td>
                            <td title="Specialization">
                                dadsadas
                            </td>
                            <td>
                                <ul className="list-actions">
                                    <li><a className="btn2" href="./agency_desc.html">Details</a></li>
                                    <li><a className="btn2" href="./agency_form_edit.html">Edit</a></li>
                                    <li><a className="btn2" href="#contact">Delete</a></li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td title="Phone">
                                +38367654765
                            </td>
                            <td title="Specialization">
                                LOL
                            </td>
                            <td>
                                <ul className="list-actions">
                                    <li><a className="btn2" href="./agency_desc.html">Details</a></li>
                                    <li><a className="btn2" href="./agency_form_edit.html">Edit</a></li>
                                    <li><a className="btn2" href="#contact">Delete</a></li>
                                </ul>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>


            </div>

            <Link className="btn" to={`/agency/add`}>Add</Link>
            <br/>
                <div className="alert">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS DELETED.
                </div>
                <br/>
                    <div className="alert">
                        <strong>ALERT!</strong> DO YOU WANT TO DELETE THE RECORD?
                        <div className="deletediv">
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Accept</span>
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Cancel</span>
                        </div>
                    </div>
                    <br/>
                        <div className="confirmation">
                            <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                            <strong>ALERT!</strong> YOUR RECORD WAS ADDED!
                        </div>
                        <br/>
                            <div className="modification">
                                <span className="closebtn"
                                      onClick="this.parentElement.style.display='none';">&times;</span>
                                <strong>ALERT!</strong>YOUR RECORD WITH NAME : dsada and WITH ADRESS: jdsadsa WAS
                                MODIFIED!
                            </div>
        </main>
    );
}

export default Agency;