import React, { useState, useContext, useRef } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from '../modal/modal'

import { AppContext } from "../contextservice/contextservice";
import Intro from "../user/intro"

export default function Profile() {

    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [modalShow, setModalShow] = useState(false);

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

    function handleUpdate(e, ref) {
        // refs[e.target.value].focus
        console.log(refs[e.target.value].current)
    }

    return (
        <>

            {/* <div className="container-fluid">
                <div className="row justify-content-center w-100">
                    <img src="holder.js/100px180" style={imgStyle} src={`https://via.placeholder.com/150`} />
                    <div className="name">{user.name.toUpperCase()}</div>
                </div>
                <hr />
            </div> */}
            <Card variant={"Dark"} style={cardStyle}>
                <div className="row w-100">
                    <div className="row w-100">
                        <Card.Img variant="top" src="holder.js/100px180" style={imgStyle} src={`https://via.placeholder.com/150`} />
                    </div>
                    <br />
                    <div className="row w-100 justify-content-end" style={{ textAlign: "center" }}>
                        <button style={{ ...buttonStyle, width: "200px" }}> Edit your photo</button>
                    </div>
                    <div className="row w-100 justify-content-center" >
                        <span style={{ textAlign: "center", fontSize: "24px" }}>{user.name.toUpperCase()}</span>
                    </div>
                </div>
                <div className="row-w-100 m-0 p-0">
                    <hr />
                    <Card.Body>
                        <div className="p-2" style={{ background: "rgba(0, 0, 0, 0.05)" }}>
                            <Card.Text>
                                <div className="row w-100" >
                                    <div className="col-md-4">
                                        <Intro />
                                    </div>
                                    <div className="col-md-8">
                                        <span>
                                            Posts
                                </span>
                                    </div>
                                </div>
                            </Card.Text>
                        </div>
                    </Card.Body>
                </div>
            </Card>
        </>
    )
}