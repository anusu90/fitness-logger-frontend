import React, { useState, useRef, useContext } from 'react'
import { AppContext } from "../contextservice/contextservice"


export default function User() {
    let context = useContext(AppContext)
    let [user, setUser] = context.user;

    return (
        <>
            <div className="row">Welcome-{user.name.toUpperCase()}</div>
        </>
    )

}