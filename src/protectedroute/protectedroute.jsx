import { Route, Redirect } from 'react-router-dom';
import { useContext } from "react"
import { AppContext } from "../contextservice/contextservice"

export default function ProtectedRoute({ component: Component, ...rest }) {

    let context = useContext(AppContext)
    let [userState, setUserState] = context.userState;

    return (
        (userState) ? <Route {...rest} component={Component} /> : <Redirect to="/"></Redirect>
    )

}
