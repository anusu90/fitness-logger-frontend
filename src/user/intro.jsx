import React, { useState, useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { AppContext } from "../contextservice/contextservice"
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

export default function Intro() {
    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;

    const buttonStyle = {
        background: "#37474f",
        border: "#37474f",
        borderRadius: "5px",
        height: "40px",
        width: "100px",
        color: "white"
    }

    const cardStyle = {
        width: "80%",
        // maxWidth: "480px",
        marginTop: "40px",
        fontFamily: "",
    }

    const imgStyle = {
        width: "30%",
        borderRadius: "50%",
        minWidth: "160px",
        margin: "5px auto",

    }

    let ageBtn = useRef(null);
    let heightBtn = useRef(null);
    let weightBtn = useRef(null);
    let bmiBtn = useRef(null);

    const refs = {

        "Age": ageBtn,
        "Height": heightBtn,
        "Weight": weightBtn,
        "BMI": bmiBtn,
    }

    const keys = ["Age", "Height", "Weight", "BMI"]

    return (

        <div style={{ border: "solid rgba(0, 0, 0, 0.05) 1px", padding: "10px", borderRadius: "10px", backgroundColor: "white" }}>
            <h5>Intro</h5>
            <div style={{ margin: "0px 0px" }}>
                {
                    keys.map((key) => {
                        if (user[key]) {
                            return <><div key={key} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", margin: "25px 0px" }}><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "5px" }} color="#37474f" />{`${key}:${user[key]}`}</div></>
                        } else {
                            return <><div key={key} style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "center", margin: "25px 0px" }}><FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: "5px" }} color="#37474f" />{`${key}: No Data`}</div></>
                        }
                    })
                }
                <Button style={buttonStyle}>Update</Button>
            </div>
        </div>

    )


}