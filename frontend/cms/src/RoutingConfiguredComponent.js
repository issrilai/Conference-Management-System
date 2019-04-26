import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import SignUpComponent from "./components/dumb/Authentication/SignUpComponent";
import React from "react";
import SignInComponent from "./components/dumb/Authentication/SignInComponent";
import {withRouter} from "react-router";

const RoutingConfiguredComponent = () => (
    <HashRouter>
        <Switch>
            <Route exact path='/' component={withRouter(SignInComponent)}/>
            <Route path="/sign-in" component={withRouter(SignInComponent)}/>
            <Route path="/sign-up" component={withRouter(SignUpComponent)}/>
        </Switch>
    </HashRouter>
);

export default RoutingConfiguredComponent;