import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import formMode from "../../helpers/formHelpers";
import {validateDeptFields} from "../../helpers/validateDeptFields";
import DeptTableRow from "./deptTableRow";

function DeptForm() {
    let { deptId } = useParams();
    let [dept, setDept] = useState('');
    let [agency, setAgencys] = useState([]);
    let page_name = '';
    let [deptErrors, setEmpErrors] = useState({ name:"", email:"", adress:"", spec_id:"" });
    let [sumErr, setSumerr] = useState('');
    let status;
    const nav = useNavigate();

    if(deptId !== undefined){
        page_name = formMode.EDIT;
    }else{
        page_name = formMode.NEW;
    }

    const handleChange = event => {
        let {name, value} = event.target;
        if (name === "spec_id"){value = parseInt(value)}
        setDept(prevState => ({
            ...prevState,
            [name]: value
        }));
        let errVal = validateDeptFields(name,value);
        setEmpErrors(prevState => ({
            ...prevState,
            [name]: errVal
        }))
    };

    const saveData = async () => {
        let res;
        let operation;
        let id;
        let body;
        if (page_name === "ADD"){
            operation = 'POST';
            id = '';
            body = JSON.stringify({
                name : dept.name,
                email: dept.email,
                adress: dept.adress,
                spec_id: dept.spec_id,
            })
        }else{
            operation = 'PUT'
            id = deptId;
            body = JSON.stringify({
                email: dept.email,
                adress: dept.adress,
                spec_id: dept.spec_id,
            });
        }
        console.log(body)
        try{
            res = await fetch('http://localhost:3000/api/depts/' + id, {
                method: operation,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: body,
            })
        } catch(e){
            console.error(`An error has occured while calling the API. ${e}`);
        }
        return res
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const sumErr2 = deptErrors;
        let valid = true;
        for (let k in sumErr2) {
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
                nav("/dept");
            }
        }else{

        }

    }

    useEffect(() => {
        const dataFetch2 = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/agencys/'
                )
            ).json();
            await setDept(prevState => ({
                ...prevState,
                ["spec_id"]: data[0].spec_id
            }));
            setAgencys(data);
        };
        dataFetch2();
        if(deptId !== undefined){
            const dataFetch = async () => {
                const data = await (
                    await fetch(
                        'http://localhost:3000/api/depts/'+deptId
                    )
                ).json();

                setDept(data);
            };

            dataFetch();

        }
    }, []);

    if (dept.message) {
        return(
            <main>
                <h2>NO DATA FOR SUCH AN EMPLOYEE</h2>
            </main>)
    }

    return (
        <main>
            <h2>{page_name} DEPT</h2>
            <form onSubmit={handleSubmit}>


                <div className="group-bl">
                    <label htmlFor="name">Name *:</label>
                    {dept?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="name" id="name" value={dept.name} disabled>

                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="name" id="name" disabled>

                        </input>
                    }
                    <span className="inputs err" id="errorName">{deptErrors["name"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="email">Email *:</label>
                    {dept?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="email" id="email" value={dept.email} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="email" id="email" required>
                        </input>
                    }
                    <span className="inputs err" id="errorEmail">{deptErrors["email"]}</span>
                </div>


                <div className="group-bl">
                    <label htmlFor="adress">Adress *:</label>
                    {dept?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="adress" id="adress" value={dept.adress} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="adress" id="adress" required>
                        </input>
                    }
                    <span className="inputs err" id="errorAdress">{deptErrors["adress"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="ags">Agency*:</label>
                    <select onChange={handleChange} className="inputs" name="spec_id" id="spec_id">
                        {agency.map(ag => (
                            ag.spec_id === dept.spec_id ?
                            <option value={ag.spec_id} selected>{ag.specialization}</option> :
                                <option value={ag.spec_id} >{ag.specialization}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <input className="btn" type="submit" value={page_name}/>
                    <Link className="btn" to="/dept">CANCEL</Link>
                    <p id="ErrSummary">{sumErr}</p>
                </div>
            </form>


        </main>
    );
}

export default DeptForm;