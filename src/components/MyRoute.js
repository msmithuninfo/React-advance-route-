import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3'
import Login from './pages/Login';

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Page1" component={Page1} />
                    <Route exact path="/Page2" component={Page2} />
                    <Route exact path="/Page3/:username" component={Page3} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

export default MyRoute;