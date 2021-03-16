import React, { useState, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'


import "./register.css"
import leftImage from "./welcomesmall.jpg"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from "../contextservice/contextservice"


export default function Register() {

    let regBtn = useRef(null);
    let history = useHistory();

    let [error, setError] = useState(null)
    let [name, setName] = useState(null)
    let [email, setEmail] = useState(null)
    let [password, setPassword] = useState(null)
    let [confPassword, setConfPassword] = useState(null)

    let [loading, setLoading] = useState(false)

    const imgStyle = {
        borderRadius: "20px",
    }
    const buttonStyle = {
        background: "#37474f",
        border: "#37474f",
        borderRadius: "5px",
        height: "40px",
        width: "100px",
        color: "white"
    }

    async function handleRegister(e) {
        setError(null);
        e.preventDefault();
        setLoading(true);
        regBtn.current.disabled = true;
        if (!email || !name || !password || !confPassword) {
            setError("Please fill in the details");
            setLoading(false);
            regBtn.current.disabled = false;
        } else if (password != confPassword) {
            setError("Passwords dont match");
            setLoading(false);
            regBtn.current.disabled = false;
        } else {

            let url = String(process.env.REACT_APP_BACKEND_URL) + "/register"
            let data = { name: name, email: email, password: password }
            let registerReq = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(data)
            })

            let registerReqBody = await registerReq.json();
            if (!registerReq.status || registerReq.status != 200) {
                setError(registerReqBody.message);
                setLoading(false);
                regBtn.current.disabled = false;
            } else if (registerReq.status == 200) {
                setError(registerReqBody.message);
                setTimeout(() => {
                    history.push("/")
                }, 1000);
            }



        }

    }

    return (
        <div className="container">
            <div className="row h-10">
                <br />
                &nbsp;
            </div>
            <div className="row h-100 align-items-center">
                <div className="register-div col-md-8">
                    <form action="#">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="Name" name="Name" id="Name" className="form-control" placeholder="Enter Your Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" name="email" id="email" className="form-control" placeholder="Enter Your Email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" className="form-control" placeholder="Enter Your password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Confpassword">Confirm Password</label>
                            <input type="password" name="Confpassword" id="Confpassword" className="form-control" placeholder="Re-Enter Your password" onChange={(e) => setConfPassword(e.target.value)} />
                        </div>
                        <p><Link to="/login">Already have an account? Login!!</Link></p>
                    </form>
                    <div className="col-12 login-error">
                        {error}
                    </div>
                    <button className="register-button" style={buttonStyle} onClick={(e) => { handleRegister(e) }} ref={regBtn}>{(loading) ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : "Submit"}</button>
                </div>
                <div className="col-md-4">
                    <img src={leftImage} alt="" style={imgStyle} />
                </div>
            </div>
        </div>
    )


}