import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import bg from "./bg.jpg"
import "./dashboard.css"

import Profile from "../profile/profile"
import LeftCol from "../leftcol/leftcol"
import AddExercise from "../exercise/addexercise"
import Table from "../table/table"
import Exercise from "../exercise/exercise"

import { useSpring, animated } from 'react-spring'



//IMPORT CHARTS

import Linechart from "../charts/linechart"
import Donut from "../charts//donut"
import Barchart from "../charts/barchart"

export default function DashBoard() {

    const [date, setDate] = useState(new Date());

    const calenderStyle = {
        fontFamily: ""
    }

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        data: [65, 59, 80, 81, 56, 55, 40]
    }

    let [data2, setData2] = useState([])

    useEffect(async () => {
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/exercisemax";
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
        console.log(getExerBody);
        setData2(getExerBody)
    }, []);

    return (
        <div className="container-fluid dashboard-container" >
            <div className="row ">
                <div className="col-3" style={{ margin: "0px", padding: "0px" }}>
                    <LeftCol />
                </div>
                <div className="col-8">
                    <Switch>
                        <Route path="/dashboard" exact>
                            <div className="row justify-content-center m-3">
                                <h3>
                                    Your Weight Graph
                                </h3>
                            </div>
                            <div className="row p-2" style={{ backgroundColor: "white", borderRadius: "5px" }}>
                                <Linechart data={data} title={"Weight"} axislabel={["Date", "KGs"]} />
                            </div>
                            <br />
                            <br />

                            <div className="row justify-content-center">
                                <h3>
                                    Your Best Performances
                                </h3>
                            </div>

                            <div className="row">
                                {
                                    data2.map(obj => {
                                        return (

                                            <Exercise obj={obj} />

                                        )
                                    })
                                }
                            </div>

                        </Route>
                        <Route path="/dashboard/workout" exact>
                            <div className="row">
                                <h5>
                                    Log your workout
                                </h5>
                            </div>
                            <div className="row">
                                <AddExercise></AddExercise>
                            </div>
                        </Route>
                        {/* <Calendar onChange={setDate} date={date} /> */}
                        <Route path="/dashboard/update" component={Profile} />
                        <Route path="/dashboard/table" component={Table} />
                    </Switch>
                </div>
            </div>

            {/* <Button ></Button> */}
        </ div>
    )



}