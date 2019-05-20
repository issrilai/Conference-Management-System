import {Route, Switch, BrowserRouter, HashRouter, Redirect} from "react-router-dom";
import React, {Component} from "react";
import Authentification from "./components/dumb/Authentication/Authentification";
import { createBrowserHistory } from 'history'
import ConferenceList from "./components/dumb/Conference/ConferenceList";
import storeConferences from './components/smart/getConferenceComponent'

class RoutingBasicComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        const history = require('history').createBrowserHistory();

        return (
            <HashRouter>
                <Switch>
                    {this.props.logged?<Route exact path='/' render={() => <ConferenceList store={storeConferences}/>}/>:''}
                    {!this.props.logged?<Route exact path='/' render={() => <Authentification action={this.props.action}/>}/>:''}
                    {!this.props.logged?<Route exact path='/sign-in' render={() => <Authentification action={this.props.action}/>}/>:
                                            <Redirect to='/'/>}
                    {!this.props.logged?<Route exact path='/sign-up' component={Authentification}/>:''}
                </Switch>
            </HashRouter>
        );
    }
}
export default RoutingBasicComponent