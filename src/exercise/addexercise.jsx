import "./login.css"
import leftImage from "./welcomesmall.jpg"
import React, { useState, useRef, useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from "../contextservice/contextservice"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function AddExercise() {
    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    let history = useHistory()

    let [loading, setLoading] = useState(false);
    let [date, setDate] = useState(null);
    let [exercise, setExercise] = useState(0);
    let [set, setSet] = useState(0);
    let [reps, setReps] = useState(0);
    let [weight, setWeight] = useState(0);
    let [error, setError] = useState(null);
    let [exerciseList, setExerciseList] = useState([]);

    let loginBtnRef = useRef(null);

    useEffect(async () => {
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/exercise";
        let exerList = []
        let getExerReq = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
        })
        let getExerBody = await getExerReq.json();
        getExerBody.forEach(value => {
            exerList.push(value.name.toUpperCase())
        })
        setExerciseList(exerList)
    }, []);


    async function handleExerciseInsertion(e) {
        setError(null);
        e.preventDefault();
        setLoading(true);
        loginBtnRef.current.disabled = true;

        if (!set || !reps || !weight) {
            setError("Please fill in the details");
            setLoading(false);
            console.log("empty things")
            loginBtnRef.current.disabled = false;
        } else {
            let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/exercise/insert"
            let data = { date: date, exercise: exercise, set: set, reps: reps, weight: weight }
            console.log(data)
            console.log(data)
            let insertRequest = await fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: "include",
                mode: "cors",
                body: JSON.stringify(data)
            })

            let insertReqBody = await insertRequest.json();

            if (!insertRequest.status || insertRequest.status != 200) {
                setError(insertReqBody.message);
                setLoading(false);
                loginBtnRef.current.disabled = false;
            } else if (insertRequest.status == 200) {
                setLoading(false);
                loginBtnRef.current.disabled = false;
                history.push("/dashboard/workout");
                setDate(null);
                setSet(0);
                setReps(0)
                setWeight(0)
                setExercise(0)
            }
            // setLoading(false);
        }
    }

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

    return (
        <div className="container">
            <div className="row h-10">
                <br />
                &nbsp;
            </div>
            <div className="row h-100 align-items-center">
                <div className="login-div col-md-6">
                    <form action="#">
                        <div className="row g-3">
                            <div className="col">
                                <label htmlFor="data">Date</label>
                                <input type="date" name="" id="data" className="form-control" onChange={(e) => setDate(e.target.value)} />
                            </div>
                            <div className="col">
                                <label htmlFor="exercise-select">Select Exercise</label>
                                <select className="form-control" id="exercise-select" aria-label="Default select example" onChange={(e) => setExercise(e.target.value)}>
                                    {
                                        exerciseList.map((value, index) => {
                                            return (
                                                <option key={index} value={index}>{value}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="set">Set</label>
                                    <input type="number" name="set" id="set" value={set} className="form-control" placeholder="Enter number of set" onChange={(e) => setSet(e.target.value)} />
                                </div>
                                <div className="col">
                                    <label htmlFor="reps">Reps</label>
                                    <input type="number" name="reps" id="reps" value={reps} className="form-control" placeholder="Enter number of reps" onChange={(e) => setReps(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="weight">Weight</label>
                            <input type="number" name="weight" id="weight" value={weight} className="form-control" placeholder="Enter weight in KGs" onChange={(e) => setWeight(e.target.value)} />
                        </div>
                    </form>
                    <div className="col-12 login-error">
                        {error}
                    </div>
                    <button className="login-button " style={buttonStyle} onClick={(e) => { handleExerciseInsertion(e) }} ref={loginBtnRef}>{(loading) ? <FontAwesomeIcon icon={faSpinner} spin size="2x" /> : "Submit"}</button>
                </div>
                <div className="col-md-4">
                    <img src={leftImage} alt="IMG" style={imgStyle} />
                </div>
            </div>
        </div>
    )
}