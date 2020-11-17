import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './components/pages/home/home';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';

const App = () => {
    return ( 
        <Router>
            <Switch>
                <Route 
                    exact path="/login"
                    component={Login}
                />
                <Route 
                    exact path="/"
                    component={Home}
                />
                <Route 
                    exact path="/register"
                    component={Register}
                />
            </Switch>
        </Router>

     );
}
 
export default App;