import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Callback from './components/pages/callback/callback';
import Home from './components/pages/home/home';
import Index from './components/pages/index.js';
import Login from './components/pages/login/login';
import Register from './components/pages/register/register';
import UsuarioPrivider from './provider/usuario';
import GetUser from './components/pages/callback/getUser'
import PlayList from './components/pages/playlist/playlist';
import Favorite from './components/pages/favorite/favorite';

const App = () => {
    return ( 
        <Router>
            <Switch>
                <UsuarioPrivider>
                    <Route 
                        exact path="/login"
                        component={Login}
                    />
                    <Route 
                        exact path="/"
                        component={Index}
                    />
                    <Route 
                        exact path="/getuser"
                        component={GetUser}
                    />
                    <Route 
                        exact path="/home"
                        component={Home}
                    />
                    <Route 
                        exact path="/register"
                        component={Register}
                    />
                    <Route 
                        exact path="/callback"
                        component={Callback}
                    />
                    <Route 
                        exact path="/playlist/:id"
                        component={PlayList}
                    />
                     <Route 
                        exact path="/favorite"
                        component={Favorite}
                    />
                </UsuarioPrivider>
            </Switch>
        </Router>

     );
}
 
export default App;