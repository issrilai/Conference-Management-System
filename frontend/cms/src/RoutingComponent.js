import {Route, Switch, BrowserRouter, HashRouter, Redirect} from "react-router-dom";
import React, {Component} from "react";
import Authentification from "./components/dumb/Authentication/Authentification";
import Home from "./components/dumb/HomeComponent";

class RoutingBasicComponent extends Component
{
    constructor(props)
    {
        super(props);

        if(this.props.logged === true)
        {

        }
    }

    render()
    {
        return (
            <HashRouter>
                <Switch>
                    {this.props.logged?<Route exact path='/' component={Home}/>:''}
                    {!this.props.logged?<Route exact path='/' component={Authentification}/>:''}
                    {!this.props.logged?<Route exact path='/sign-in' render={() => <Authentification action={this.props.action}/>}/>:''}
                    {!this.props.logged?<Route exact path='/sign-up' component={Authentification}/>:''}
                </Switch>
            </HashRouter>
        );
    }
}
export default RoutingBasicComponent



