import React, { useEffect, useState } from 'react';
import dayjs from "dayjs"

export default function Table() {

    const exerciseList = ["DEAD LIFT", "SQUAT", "BENCH PRESS", "LAT PULLDOWN", "DUMBELL ROWING", "PULL OVER", "SKULL CRUSHER"]

    let [data, setData] = useState([])

    useEffect(async () => {
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/users/exercisetable";
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
        setData(getExerBody)
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S. No</th>
                        <th scope="col">Excercise</th>
                        <th scope="col">Date</th>
                        <th scope="col">Set</th>
                        <th scope="col">Reps</th>
                        <th scope="col">Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((obj, index) => {

                            return (
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{exerciseList[obj.exercise_id]}</td>
                                    <td>{dayjs(obj.date_exercise).format("DD-MM-YYYY")}</td>
                                    <td>{obj.sets}</td>
                                    <td>{obj.reps}</td>
                                    <td>{obj.weight}</td>
                                </tr>

                            )



                        })

                    }

                </tbody>
            </table>
        </div>
    )



}