import React, {useEffect, useState} from 'react'
import { Link, useParams } from 'react-router-dom'
import formMode from "../../helpers/formHelpers"
import {validateEmpFields} from "../../helpers/validateEmpFields";
import { Routes, Route, useNavigate} from 'react-router-dom';
import Emp from "./emp";
import {getEmployeeByIdApiCall} from "../../apiCalls/empApiCalls";
import {getEmployeesApiCall} from "../../apiCalls/empApiCalls";



function EmpForm() {
    let { empId } = useParams();
    let [emp, setEmp] = useState('');
    let page_name = '';
    let [empErrors, setEmpErrors] = useState({ fname:"", lname:"", email:"", date_of_birth:"" });
    let [sumErr, setSumerr] = useState('');
    let status;
    const nav = useNavigate();

    if(empId !== undefined){
        empId = parseInt(empId)
        page_name = formMode.EDIT;
    }else{
        page_name = formMode.NEW;
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setEmp(prevState => ({
            ...prevState,
            [name]: value
        }));
        let errVal = validateEmpFields(name,value);
        setEmpErrors(prevState => ({
            ...prevState,
            [name]: errVal
        }))
    };

    const saveData = async () => {
        let res;
        let operation;
        let id;
        if (page_name === "ADD"){
            operation = 'POST'
            id = ''
        }else{
            operation = 'PUT'
            id = empId;
        }
        try{
            res = await fetch('http://localhost:3000/api/emps/' + id, {
                method: operation,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(emp),
            })
        } catch(e){
            console.error(`An error has occured while calling the API. ${e}`);
        }
        return res
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const sumErr2 = empErrors;
        console.log(sumErr2);
        let valid = true;
        for (let k in sumErr2) {
            console.log(k + ' is ' + sumErr2[k])
            if (sumErr2[k] !== ''){
                setSumerr('YOUR FORM HAS ERRORS, FIX THEM FIRSTLY');
                valid = false;
            }
        }
        if(valid === true){
            let res = await saveData(); // Save games when form is submitted
            status = res.status;
            let errorSumServer = '';
            if (status !== 200){
                errorSumServer = res.json().then((val) => setSumerr(val));
            }
            if (status === 200){
                errorSumServer = res.json().then((val) => setSumerr(val));
                nav("/emp");
            }
        }else{

        }

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
    }, []);

    if (emp.message) {
        return(
            <main>
                <h2>NO DATA FOR SUCH AN EMPLOYEE</h2>
            </main>)
    }


    return (
        <main>
            <h2>{page_name} EMP</h2>
            <form onSubmit={handleSubmit}>
                <div className="group-bl">
                    <label htmlFor="sur">Surname *:</label>
                    {emp?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="lname" id="sur" value={emp.lname} required>

                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="lname" id="sur" required>

                        </input>
                    }
                    <span className="inputs err" id="errorSur">{empErrors["lname"]}</span>
                </div>


                <div className="group-bl">
                    <label htmlFor="name">Name *:</label>
                    {emp?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="fname" id="name" value={emp.fname} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="fname" id="name" required>
                        </input>
                    }
                    <span className="inputs err" id="errorName">{empErrors["fname"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="email">Email *:</label>
                    {emp?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="email" id="email" value={emp.email} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="email" id="email" required>
                        </input>
                    }
                    <span className="inputs err" id="errorEmail">{empErrors["email"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="birthday">Birthday*:</label>
                    {emp.date_of_birth?
                        (
                            <input onChange={handleChange} className="inputs" type="date" id="date_of_birth" name="date_of_birth" value={emp.date_of_birth.substring(0, 10)} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="date" id="date_of_birth" name="date_of_birth" required>
                        </input>
                    }
                    <span className="inputs err" id="errorBirthday">{empErrors["date_of_birth"]}</span>
                </div>

                <div>
                    <input className="btn" type="submit" value={page_name}/>
                        <Link className="btn" to="/emp">CANCEL</Link>
                    <p id="ErrSummary">{sumErr}</p>
                </div>
            </form>
        </main>
    );
}

export default EmpForm;