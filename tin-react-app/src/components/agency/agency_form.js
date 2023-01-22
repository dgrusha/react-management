import React, {useEffect, useState} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import formMode from "../../helpers/formHelpers";
import {validateEmpFields} from "../../helpers/validateEmpFields";
import {validateAgencyFields} from "../../helpers/validateAgencyFields";
import Agency from "./agency";
import { useTranslation } from 'react-i18next';
import {validateDeptFields} from "../../helpers/validateDeptFields";
import {type} from "@testing-library/user-event/dist/type";
import {getCurrentUser} from "../../helpers/authHelper";

function AgencyForm() {
    let { spec_id } = useParams()


    let [ag, setAg] = useState('');
    let page_name,page_title, action = '';
    let [agErrors, setAgErrors] = useState({ phone:"", specialization:"", tax_number:"", date_of_creation:"" });
    let [sumErr, setSumerr] = useState('');
    let status;
    let [navigate, setNav] = useState('');
    const { t, i18n } = useTranslation();

    if(spec_id !== undefined){
        spec_id = parseInt(spec_id);
        page_name = formMode.EDIT;
        page_title = t('agency.titles.edit');
        action = t('agency.btns.edit');
    }else{
        page_name = formMode.NEW;
        page_title = t('agency.titles.new');
        action = t('agency.btns.new');
    }

    const handleChange = event => {
        const {name, value} = event.target;
        setAg(prevState => ({
            ...prevState,
            [name]: value
        }));
        let errVal = validateAgencyFields(name,value);
        if (errVal !== ''){
            errVal =  t('errors.'+errVal)
        }
        setAgErrors(prevState => ({
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
        let id, body;
        if (page_name === "ADD"){
            operation = 'POST';
            id = '';
            body = JSON.stringify({
                phone : ag.phone,
                specialization: ag.specialization,
                tax_number: ag.tax_number,
                date_of_creation: ag.date_of_creation.substring(0, 10),
            })
        }else{
            operation = 'PUT'
            id = spec_id;
            body = JSON.stringify({
                phone : ag.phone,
                specialization: ag.specialization,
                tax_number: ag.tax_number,
                date_of_creation: ag.date_of_creation.substring(0, 10),
            })
        }
        try{
            res = await fetch('http://localhost:3000/api/agencys/' + id, {
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
        const sumErr2 = agErrors;
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
                console.log(res.json().then((val) => setSumerr(val.errors[0].message)))
                errorSumServer = res.json().then((val) => setSumerr(val.errors[0].message));
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

    if (navigate === 'add') {
        return <Agency mode={'add'}/>
    }else if (navigate === 'edit'){
        return <Agency mode={'edit'}/>
    }


    return (
        <main>
            <h2>{page_title}</h2>
            <form onSubmit={handleSubmit} noValidate>

                <div className="group-bl">
                    <label htmlFor="date_of_creation">{t('agency.fields.doc')}*:</label>
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
                    <label htmlFor="phone">{t('agency.fields.phone')} *:</label>
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
                    <label htmlFor="specialization">{t('agency.fields.spec')} *:</label>
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
                    <label htmlFor="tax_number">{t('agency.fields.tax')} *:</label>
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
                    <input className="btn" type="submit" value={action}/>
                    <Link className="btn" to="/agency">{t('agency.btns.cancel')}</Link>
                    <p className="ErrSummary inputs err">{sumErr}</p>
                </div>
            </form>


        </main>
    );
}

export default AgencyForm;