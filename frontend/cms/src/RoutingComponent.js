import {Route, Switch, BrowserRouter, HashRouter, Redirect} from "react-router-dom";
import React, {Component} from "react";
import Authentification from "./components/dumb/Authentication/Authentification";
import ConferenceList from "./components/dumb/Conference/ConferenceList";
import storeConferences from './components/smart/getConferenceComponent'
import HeaderComponent from "./components/dumb/HeaderComponent";
import Cookies from "universal-cookie";
import AddConference from "./components/dumb/Conference/AddConference";

class RoutingBasicComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    render() {
        const cookies = new Cookies();
        let btns = [];
        if (cookies.get('role') === "listener") {
            btns = [{name:"SIGN OUT",
                    path: "/caca"}]

        }
        if (cookies.get('role') === 'author') {
            btns = [{name: "authorButton", path: "/caca"}]
        }
        if (cookies.get('role') === "cm" ) {
            btns = [{name:"ADD CONFERENCE", path: "/addConference"}]
        }
        return (
            <HashRouter>
                {this.props.logged? <HeaderComponent btns = {btns}/> : "" }
                <Switch>
                    <Route exact path='/addConference' component={AddConference}/>
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