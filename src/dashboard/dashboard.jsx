import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import bg from "./bg.jpg"
import "./dashboard.css"

import Profile from "../profile/profile"
import LeftCol from "../leftcol/leftcol"
import AddExercise from "../exercise/addexercise"



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

    return (
        <div className="container-fluid dashboard-container" >
            <div className="row ">
                <div className="col-3" style={{ margin: "0px", padding: "0px" }}>
                    <LeftCol />
                </div>
                <div className="col-8">
                    <Switch>
                        <Route path="/dashboard" exact>
                            <div className="row">
                                <h5>
                                    Weight Graph
                                </h5>
                            </div>
                            <div className="row p-2" style={{ backgroundColor: "white", borderRadius: "5px" }}>
                                <Linechart data={data} title={"Weight"} axislabel={["Date", "KGs"]} />
                            </div>
                            <div className="row">
                                Exercise Graph
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
                    </Switch>
                </div>
            </div>

            {/* <Button ></Button> */}
        </ div>
    )



}