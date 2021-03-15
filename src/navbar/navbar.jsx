import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from "react"

import "./navbar.css"

export default function navbar() {

    const style = {
        textDecoration: 'none',
        color: "rgba(255, 255, 255, .5)",
    }

    const navStyle = {
        height: "55px"
    }

    const logoStyle = {

        textDecoration: 'none',
        color: "rgba(255, 255, 255, .5)",
        fontSize: "24px"

    }

    return (
        <>
            <Navbar bg="dark" variant="dark" style={navStyle}>
                <Link to="/" style={logoStyle}> Gain-X </Link>
                <Nav className="ml-auto nav-ul">
                    <Link style={style} to="/features">Features</Link>
                    <Link style={style} to="/pricing">Pricing</Link>
                    <Link style={style} to="/login">Login</Link>
                    <Link style={style} to="/register">Register</Link>
                </Nav>
            </Navbar>
        </>

    )

}