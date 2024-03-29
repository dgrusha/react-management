import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import {validateEmpFields} from "../../helpers/validateEmpFields";
import formMode from "../../helpers/formHelpers";
import DeptEmp from "./deptEmp";
import { useTranslation } from 'react-i18next';
import {validateDeptEmpFields} from "../../helpers/validateDeptEmpFields";
import {getCurrentUser} from "../../helpers/authHelper";

function DeptEmpForm() {
    let { deId1} = useParams();
    let [deptEmp, setDeptEmp] = useState('')
    let [dept, setDept] = useState([]);
    let [emp, setEmp] = useState([]);

    let page_name,page_title, action = '';
    let [deptEmpErrors, setDeptEmpErrors] = useState({ name:"", start_contract:"", end_contract:"", emp_id:"" });
    let [sumErr, setSumerr] = useState('');
    let [navigate, setNav] = useState('');
    let status;
    const { t, i18n } = useTranslation();

    if(deId1 !== undefined){
        page_name = formMode.EDIT;
        page_title = t('deptEmp.titles.edit');
        action = t('deptEmp.btns.edit');
    }else{
        page_name = formMode.NEW;
        page_title = t('deptEmp.titles.new');
        action = t('deptEmp.btns.new');
    }

    const handleChange = event => {
        let {name, value} = event.target;
        if (name === "emp_id"){
            value = parseInt(value);
        }
        setDeptEmp(prevState => ({
            ...prevState,
            [name]: value
        }));

        let errVal = validateDeptEmpFields(name,value);
        if (errVal !== ''){
            errVal =  t('errors.'+errVal)
        }
        setDeptEmpErrors(prevState => ({
            ...prevState,
            [name]: errVal
        }))
    };

    const saveData = async () => {
        const user = getCurrentUser()
        let token
        if (user && user.token) {
            token = user.token
        }
        let res;
        let operation;
        let id;
        let body;
        if (page_name === "ADD"){
            operation = 'POST';
            id = '';
            body = JSON.stringify({
                start_contract: deptEmp.start_contract,
                end_contract: deptEmp.end_contract,
                name: deptEmp.name,
                emp_id: deptEmp.emp_id
            })
        }else{
            operation = 'PUT'
            id = deId1;
            body = JSON.stringify({
                start_contract: deptEmp.start_contract,
                end_contract: deptEmp.end_contract
            });
        }
        try{
            res = await fetch('http://localhost:3000/api/deptEmps/' + id, {
                method: operation,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*",
                    'Authorization': 'Bearer ' + token
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
        const sumErr2 = deptEmpErrors;
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
                if (page_name === "ADD"){
                    setNav("add")
                }else{
                    setNav("edit")
                }
            }
        }else{
        }

    }

    useEffect(() => {
        const dataFetchEmp = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/emps/'
                )
            ).json();
            await setDeptEmp(prevState => ({
                ...prevState,
                ["emp_id"]: data[0]._id
            }));
            setEmp(data);
        };
        const dataFetchDept = async () => {
            const data = await (
                await fetch(
                    'http://localhost:3000/api/depts/'
                )
            ).json();
            await setDeptEmp(prevState => ({
                ...prevState,
                ["name"]: data[0].name
            }));
            setDept(data);
        };
        if(deId1 !== undefined){
            const dataFetch = async () => {
                const data = await (
                    await fetch(
                        'http://localhost:3000/api/deptEmps/'+deId1
                    )
                ).json();

                setDeptEmp(data);
            };

            dataFetch();


        }
        dataFetchEmp();
        dataFetchDept();
    }, []);

    if (deptEmp.message) {
        return(
            <main>
                <h2>NO DATA FOR SUCH AN DEPT EMP</h2>
            </main>)
    }

    if (navigate === 'add') {
        return <DeptEmp mode={'add'}/>
    }else if (navigate === 'edit'){
        return <DeptEmp mode={'edit'}/>
    }

    return (
        <main>
            <h2>{page_title}</h2>
            <form onSubmit={handleSubmit}>


                <div className="group-bl">
                    <label htmlFor="emp_id">{t('deptEmp.fields.nemp')}  *:</label>
                    <select onChange={handleChange} className="inputs" name="emp_id" id="emp_id">
                        {emp.map(e => (
                            e._id === deptEmp.emp_id ?
                                <option key={e._id} value={e._id} selected>{e.fname} {e.lname}</option> :
                                <option key={e._id} value={e._id} >{e.fname} {e.lname}</option>
                        ))}
                    </select>
                    <span className="inputs err" id="errorD1">{deptEmpErrors["emp_id"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="start_contract">{t('deptEmp.fields.dos')}*:</label>
                    {deptEmp.start_contract?
                        (
                            <input onChange={handleChange} className="inputs" type="date" id="start_contract" name="start_contract" value={deptEmp.start_contract.substring(0, 10)} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="date" id="start_contract" name="start_contract" required>
                        </input>
                    }
                    <span className="inputs err" id="errorD1">{deptEmpErrors["start_contract"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="end_contract">{t('deptEmp.fields.doe')} *:</label>
                    {deptEmp.end_contract?
                        (
                            <input onChange={handleChange} className="inputs" type="date" id="end_contract" name="end_contract" value={deptEmp.end_contract.substring(0, 10)} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="date" id="end_contract" name="end_contract" required>
                        </input>
                    }
                    <span className="inputs err" id="errorD2">{deptEmpErrors["end_contract"]}</span>
                </div>


                <div className="group-bl">
                    <label htmlFor="name">{t('deptEmp.fields.dept')}*:</label>
                    <select onChange={handleChange} className="inputs" name="name" id="name">
                        {dept.map(d => (
                            d.name === deptEmp.name ?
                                <option key={d.name} value={d.name} selected>{d.name}</option> :
                                <option key={d.name} value={d.name} >{d.name}</option>
                        ))}
                    </select>
                    <span className="inputs err" id="errorD2">{deptEmpErrors["name"]}</span>
                </div>

                <div>
                    <input className="btn" type="submit" value={action}/>
                        <Link className="btn" to={`/deptEmp/`}>
                            Cancel
                        </Link>
                        <p className="ErrSummary err"></p>
                </div>
            </form>


        </main>
    );
}

export default DeptEmpForm;