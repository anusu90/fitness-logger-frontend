import React, { useEffect, useState } from 'react';
import dayjs from "dayjs"

export default function Exercise(props) {

    console.log(props)


    const exerciseList = ["DEAD LIFT", "SQUAT", "BENCH PRESS", "LAT PULLDOWN", "DUMBELL ROWING", "PULL OVER", "SKULL CRUSHER"];

    return (
        <div className="card m-2" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title">{exerciseList[props.obj.exercise_id]}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Max Weight: {props.obj["max(weight)"]}</h6>
                <p className="card-text">Date of Exercise: {dayjs(props.obj.date_exercise).format("DD-MM-YYYY")} </p>
            </div>
        </div>
    )

}