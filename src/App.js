import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import './CSS/sb-admin-2.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// IMPORTING COMPONENTS
import NavBar from "./navbar/navbar"
import Welcome from "./welcome/welcome"
import Login from './login/login';
import Register from './register/register';

//IMPORT CONTEXT
import { AppProvider } from './contextservice/contextservice';

//IMPORT PROTECTED ROUTE
import ProtectedRoute from "./protectedroute/protectedroute"
import DashBoard from './dashboard/dashboard';

library.add(faCheckCircle)
function App() {
  return (
    <>
      <AppProvider>
        <Router>
          <NavBar></NavBar>
          <div className="container-fluid">
            <div className="row">
              <Switch>
                <Route path="/login" component={Login} exact></Route>
                <Route path="/register" component={Register} exact></Route>
                <ProtectedRoute path="/dashboard" component={DashBoard}></ProtectedRoute>
                <Route path="/" component={Welcome} exact></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
