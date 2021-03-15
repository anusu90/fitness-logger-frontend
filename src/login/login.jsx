import "./login.css"
import leftImage from "./welcomesmall.jpg"
import React, { useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from "../contextservice/contextservice"

import Button from '@material-ui/core/Button';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function Login() {

    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    let history = useHistory()

    let [error, setError] = useState(null)
    let [loading, setLoading] = useState(false)
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)
    let loginBtnRef = useRef(null);

    async function handleLogin(e) {
        setError(null);
        e.preventDefault();
        setLoading(true);
        loginBtnRef.current.disabled = true;

        if (!email || !password) {
            setError("Please fill in the details");
            setLoading(false);
            console.log("empty things")
            loginBtnRef.current.disabled = false;
        } else {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/login"
            console.log(url)
            let data = { email: email, password: password }
            console.log(data)
            let loginRequest = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(data)
            })

            let loginReqBody = await loginRequest.json();

            console.log(loginReqBody)

            if (!loginRequest.status || loginRequest.status != 200) {
                setError(loginReqBody.message);
                setLoading(false);
                loginBtnRef.current.disabled = false;
            } else if (loginRequest.status == 200) {
                setUser(loginReqBody)
                setUserState(true)
                history.push("/")
            }
        }
    }

    const imgStyle = {
        borderRadius: "20px",
    }

    return (
        <div className="container">
            <div className="row h-10">
                <br />
                &nbsp;
            </div>
            <div className="row h-100 align-items-center">
                <div className="login-div col-md-8">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter Your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p><a href="#">Problem Signing In?</a></p>
                    </form>
                    <div className="col-12 login-error">
                        {error}
                    </div>
                    <button className="login-button " onClick={(e) => { handleLogin(e) }} ref={loginBtnRef}>{(loading) ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : "Submit"}</button>
                </div>
                <div className="col-md-4">
                    <img src={leftImage} alt="IMG" style={imgStyle} />
                </div>
            </div>
        </div>
    )


}