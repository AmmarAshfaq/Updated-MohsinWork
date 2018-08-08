import React, { Component } from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';
import UserLogin from './components/usersignin/usersignin'
import UserSignup from './components/usersignup/usersignup'
import StudentHome from './components/usersignin/userhome'

import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory()

class Routers extends Component {
    render() {
        return (
            <BrowserRouter >
                <Switch>

                    <Route exact path="/" component={UserSignup} />
                    <Route exact path="/usersignin" component={UserLogin} />
                    <Route exact path="/home" component={StudentHome} />

                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routers;