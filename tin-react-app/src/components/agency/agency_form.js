import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import formMode from "../../helpers/formHelpers";
import {validateEmpFields} from "../../helpers/validateEmpFields";
import {validateAgencyFields} from "../../helpers/validateAgencyFields";

function AgencyForm() {
    let { spec_id } = useParams()


    let [ag, setAg] = useState('');
    let page_name = '';
    let [agErrors, setAgErrors] = useState({ phone:"", specialization:"", tax_number:"", date_of_creation:"" });
    let [sumErr, setSumerr] = useState('');
    let status;
    const nav = useNavigate();

    if(spec_id !== undefined){
        spec_id = parseInt(spec_id);
        page_name = formMode.EDIT;
    }else{
        page_name = formMode.NEW;
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setAg(prevState => ({
            ...prevState,
            [name]: value
        }));
        let errVal = validateAgencyFields(name,value);
        setAgErrors(prevState => ({
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
            id = spec_id;
        }
        try{
            res = await fetch('http://localhost:3000/api/agencys/' + id, {
                method: operation,
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                },
                body: JSON.stringify(ag),
            })
        } catch(e){
            console.error(`An error has occured while calling the API. ${e}`);
        }
        return res
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        const sumErr2 = agErrors;
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
                nav("/agency");
            }
        }else{

        }

    }

    useEffect(() => {
        if(spec_id !== undefined){
            const dataFetch = async () => {
                const data = await (
                    await fetch(
                        'http://localhost:3000/api/agencys/'+spec_id
                    )
                ).json();

                setAg(data);
            };
            dataFetch();
        }
    }, []);

    if (ag.message) {
        return(
            <main>
                <h2>NO DATA FOR SUCH AN EMPLOYEE</h2>
            </main>)
    }


    return (
        <main>
            <h2>NEW AGENCY</h2>
            <form onSubmit={handleSubmit}>

                <div className="group-bl">
                    <label htmlFor="date_of_creation">Date of creation*:</label>
                    {ag.date_of_creation?
                        (
                            <input onChange={handleChange} className="inputs" type="date" id="date_of_birth" name="date_of_birth" value={ag.date_of_creation.substring(0, 10)} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="date" id="date_of_creation" name="date_of_creation" required>
                        </input>
                    }
                    <span className="inputs err" id="errorDateCreated">{agErrors["date_of_creation"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="phone">Phone *:</label>
                    {ag?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="phone" id="phone" value={ag.phone} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="phone" id="phone" required>
                        </input>
                    }
                    <span className="inputs err" id="errorPhone">{agErrors["phone"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="specialization">Specialization *:</label>
                    {ag?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="specialization" id="specialization" value={ag.specialization} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="specialization" id="specialization" required>
                        </input>
                    }
                    <span className="inputs err" id="errorSpecialization">{agErrors["specialization"]}</span>
                </div>

                <div className="group-bl">
                    <label htmlFor="tax_number">Tax number *:</label>
                    {ag?
                        (
                            <input onChange={handleChange} className="inputs" type="text" name="tax_number" id="tax_number" value={ag.tax_number} required>
                            </input>
                        ) :
                        <input onChange={handleChange} className="inputs" type="text" name="tax_number" id="tax_number" required>
                        </input>
                    }
                    <span className="inputs err" id="errorTax">{agErrors["tax_number"]}</span>
                </div>

                <div>
                    <input className="btn" type="submit" value={page_name}/>
                    <Link className="btn" to="/agency">CANCEL</Link>
                    <p id="ErrSummary">{sumErr}</p>
                </div>
            </form>


        </main>
    );
}

export default AgencyForm;