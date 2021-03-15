import { BrowserRouter as Router, Route } from 'react-router-dom'



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// IMPORTING COMPONENTS
import Navbar from "./navbar/navbar"
import Welcome from "./welcome/welcome"
import Login from './login/login';
import Register from './register/register';

//IMPORT CONTEXT
import { AppProvider } from './contextservice/contextservice';

function App() {
  return (

    <>
      <AppProvider>
        <Router>
          <Navbar></Navbar>
          <div className="container-fluid">
            <div className="row">
              <Route path="/login" component={Login} exact></Route>
              <Route path="/register" component={Register} exact></Route>
              <Route path="/" component={Welcome} exact></Route>
            </div>
          </div>
        </Router>
      </AppProvider>
    </>
  );
}

export default App;
