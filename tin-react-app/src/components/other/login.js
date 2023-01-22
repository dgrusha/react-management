import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import {authApiCall} from "../../apiCalls/authApiCall";

function LoginForm(props) {
    const [user, setUser] = useState(
        {
            name: '',
            password: ''
        }
    )
    const [errors, setErrors] = useState(
        {
            name: '',
            password: ''
        }
    )
    const [message, setMessage] = useState('')
    const { t } = useTranslation()
    const navigate = useNavigate()

    function handleChange(event) {

        const { name, value } = event.target
        console.log(user);
        setUser({
            ...user,
            [name]: value
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        let response;
        authApiCall(user)
            .then(res => {
                response = res
                return res.json()
            })
            .then(
                (data) => {
                    console.log(data);
                    if (response.status === 200) {
                        if (data.token) {
                            const userString = JSON.stringify(data)
                            props.handleLogin(userString)
                            navigate(-1)
                        }
                    }else if (response.status === 401) {
                        setMessage(data.message)
                    }
                },
                (error) => {
                    setMessage(error)
                }
            )

    }

    return (
        <main>
            <h2>Login</h2>
            {!props.user ?
                <form onSubmit={handleSubmit} method="post" action="/login" noValidate>

                <label htmlFor="loginName">
                    {t('login.name')}</label>
                <input onChange={handleChange} name="name"  type="name" id="loginName" value={user.name} name="name"></input>
                <label htmlFor="loginPassword">
                    {t('login.pass')}</label>
                <input onChange={handleChange} name="password"  type="password" id="loginPassword" value={user.password} name="password"></input>
                <p className="inputs err">{message}</p>
                <br/>
                <br/>
                <button className="btn2" type="submit">Sign in</button>
                </form>
                :
                <div>
                    <h3>YOU ARE LOGGED IN</h3>
                <button className="btn2" onClick={props.handleLogout} type="submit">Logout</button>
                </div>}

        </main>
    )

}

export default LoginForm