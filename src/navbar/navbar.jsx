import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useEffect, useContext } from "react"
import "./navbar.css"

import { AppContext } from "../contextservice/contextservice"

export default function NavBar() {

    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;
    let [user, setUser] = context.user;
    let history = useHistory();
    let location = useLocation();

    useEffect(async () => {
        console.log("hist", history, location)
        let url = String(process.env.REACT_APP_BACKEND_URL) + '/checkloginstatus';
        let statusRequest = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors"
        })
        if (statusRequest.status == 200) {
            let user = await statusRequest.json()
            setUserState(true);
            setUser(user)
            history.push("/dashboard")
        }
    }, [])

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

    async function handleLogout(e) {
        let url = String(process.env.REACT_APP_BACKEND_URL) + "/logout"
        let logoutReq = await fetch(url, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include",
            mode: "cors",
        })
        if (logoutReq.status == 200) {
            setUserState(false)
            setUser({})
            history.push("/")
        } else {
            console.log("error occured")
        }
    }

    if (!userState) {
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
    } else {
        return (
            <>
                <Navbar bg="dark" variant="dark" style={navStyle}>
                    <Link to="/" style={logoStyle}> Gain-X </Link>
                    <Nav className="ml-auto nav-ul">
                        <Link style={style} to="/features">Features</Link>
                        <Link style={style} to="/pricing">Pricing</Link>
                        <Link style={style} to="/login">Search</Link>
                        <Link style={style} to="" onClick={(e) => handleLogout(e)}>Logout</Link>
                    </Nav>
                </Navbar>
            </>
        )
    }
}