import { Link } from 'react-router-dom'
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";

function Emp() {
    const empList = getEmployeesApiCall()
    return (
        <main>
            <h2>EMP</h2>
            <table className="table-list">
                <thead>
                <tr>
                    <th>surname</th>
                    <th>name</th>
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                {empList.map(emp => (
                    <tr>
                        <td title="surname">
                            {emp.surname}
                        </td>
                        <td title="name">
                            {emp.name}
                        </td>
                        <td className="list-actions-el">
                            <ul className="list-actions">
                                <li><Link className="btn2" to={`/emp/details/${emp._id}`}>Details</Link></li>
                                <li><Link className="btn2" to={`/emp/edit/${emp._id}`}>Edit</Link></li>
                                <li><Link className="btn2" to={`/emp/delete/${emp._id}`}>Delete</Link></li>
                            </ul>
                        </td>
                    </tr>
                ))}

                </tbody>

            </table>


            <Link className="btn" to={`/emp/add`}>
                Add
            </Link>
            <br></br>
                <div className="alert">
                    <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                    <strong>ALERT!</strong> YOUR RECORD WAS DELETED.
                </div>
            <br></br>
                    <div className="alert">
                        <strong>ALERT!</strong> DO YOU WANT TO DELETE THE RECORD?
                        <div className="deletediv">
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Accept</span>
                            <span className="deletebtn"
                                  onClick="this.parentElement.parentElement.style.display='none';">Cancel</span>
                        </div>
                    </div>
            <br></br>
                        <div className="confirmation">
                            <span className="closebtn" onClick="this.parentElement.style.display='none';">&times;</span>
                            <strong>ALERT!</strong> YOUR RECORD WAS ADDED!
                        </div>
            <br></br>
                            <div className="modification">
                                <span className="closebtn"
                                      onClick="this.parentElement.style.display='none';">&times;</span>
                                <strong>ALERT!</strong>YOUR RECORD WITH NAME : dsada and WITH SURNAME: jdsadsa WAS
                                MODIFIED!
                            </div>

        </main>
    );
}

export default Emp;