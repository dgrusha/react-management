import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function Dept() {
    const empList = getEmployeesApiCall()
    return (
        <main>
            <h2>DEPT</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>name</th>
                    <th>email</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td title="Name:">
                        dsada
                    </td>
                    <td title="Email:">
                        Email@em.em
                    </td>
                    <td>
                        <ul className="list-actions">
                            <li><Link className="btn2" to={`/dept/details/1`}>Details</Link></li>
                            <li><Link className="btn2" to={`/dept/edit/1`}>Edit</Link></li>
                            <li><Link className="btn2" to={`/dept/delete/1`}>Delete</Link></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td title="Name:">
                        fghfd
                    </td>
                    <td title="Email:">
                        Emai2l@em.em
                    </td>
                    <td>
                        <ul className="list-actions">
                            <li><a className="btn2" href="./dept_desc.html">Details</a></li>
                            <li><a className="btn2" href="./dept_form_edit.html">Edit</a></li>
                            <li><a className="btn2" href="#contact">Delete</a></li>
                        </ul>
                    </td>
                </tr>
                <tr>
                    <td title="Name:">
                        fghewqfd
                    </td>
                    <td title="Email:">
                        Emai23l@em.em
                    </td>
                    <td>
                        <ul className="list-actions">
                            <li><a className="btn2" href="./dept_desc.html">Details</a></li>
                            <li><a className="btn2" href="./dept_form_edit.html">Edit</a></li>
                            <li><a className="btn2" href="#contact">Delete</a></li>
                        </ul>
                    </td>
                </tr>

                </tbody>

            </table>
            <Link className="btn" to={`/dept/add`}>Add</Link>
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

export default Dept;