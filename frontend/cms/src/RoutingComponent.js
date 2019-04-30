import {Route, Switch, BrowserRouter, HashRouter} from "react-router-dom";
import React from "react";
import Authentification from "./components/dumb/Authentication/Authentification";

const RoutingBasicComponent = () => (
    <HashRouter>
    <Switch>
        <Route exact path='/' component={Authentification}/>
        <Route exact path='/sign-in' component={Authentification}/>
        <Route exact path='/sign-up' component={Authentification}/>

    </Switch>
    </HashRouter>
);
export default RoutingBasicComponent



