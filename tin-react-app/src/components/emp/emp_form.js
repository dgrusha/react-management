import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";


function EmpForm() {
    let { empId } = useParams()
    let [emp, setEmp] = useState(null)
    if(empId !== undefined){
        empId = parseInt(empId)

    }
    useEffect(() => {
        if(empId !== undefined){
        const dataFetch = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/emps/'+empId
                )
            ).json();

            setEmp(data);
        };
        dataFetch();
        }
        else return null;
    }, [empId]);
    console.log(emp)
    return (
        <main>
            <h2>NEW EMP</h2>
            <form>
                <div className="group-bl">
                    <label htmlFor="sur">Surname *:</label>
                    {emp?
                        (
                            <input className="inputs" type="text" name="sur" id="sur" value={emp.lname} required>

                             </input>
                        ) :
                        <input className="inputs" type="text" name="sur" id="sur" required>

                        </input>
                    }

                </div>

                <div className="group-bl">
                    <label htmlFor="name">Name *:</label>
                    {emp?
                        (
                            <input className="inputs" type="text" name="name" id="name" value={emp.fname} required>
                            </input>
                        ) :
                        <input className="inputs" type="text" name="name" id="name" required>
                        </input>
                    }

                </div>

                <div className="group-bl">
                    <label htmlFor="email">Email *:</label>
                    {emp?
                        (
                            <input className="inputs" type="text" name="email" id="email" value={emp.email} required>
                            </input>
                        ) :
                        <input className="inputs" type="text" name="email" id="email" required>
                        </input>
                    }

                </div>

                <div className="group-bl">
                    <label htmlFor="birthday">Birthday*:</label>
                    {emp?
                        (
                            <input className="inputs" type="date" id="birthday" name="birthday" value={emp.date_of_birth.substring(0, 10)} required>
                            </input>
                        ) :
                        <input className="inputs" type="date" id="birthday" name="birthday" required>
                        </input>
                    }

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