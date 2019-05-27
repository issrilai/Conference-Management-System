import {Route, Switch, Redirect} from "react-router-dom";
import React from "react";
import Authentification from "./components/dumb/Authentication/Authentification";
import ConferenceList from "./components/dumb/Conference/ConferenceList";
import HeaderComponent from "./components/dumb/HeaderComponent";
import Cookies from "universal-cookie";
import AddConference from "./components/dumb/Conference/AddConference";
import storeConferences from './components/smart/getConferenceComponent';
import storeCommitteeMembers from './components/smart/getCommitteeMembersComponent'


const RoutingBasicComponent = (props) => {

        const cookies = new Cookies();
        let btns = [];
        if (cookies.get('role') === "listener") {
            btns = [{
                name: "SIGN OUT",
                path: "/caca"
            }]

        }
        if (cookies.get('role') === 'author') {
            btns = [{name: "authorButton", path: "/caca"}]
        }
        if (cookies.get('role') === "chair") {
            btns = [{name: "ADD CONFERENCE", path: "/addConference"}]
        }
        if (cookies.get('role') === "reviewer") {
            btns = [{name: "reviewerDoSomething", path: "/caca"}];
        }

        return (
            <React.Fragment>
                {props.logged ? <HeaderComponent logged={props.logged} actionLogout={props.actionLogout} btns={btns}/> : '' }
                <Switch>
                    <Route exact path='/test' render={() => <AddConference store={storeCommitteeMembers} />}/>
                    {props.logged ? <Route exact path='/addConference' render={() => <AddConference store={storeCommitteeMembers}/>}/> : ''}
                    {props.logged ?
                        <Route exact path='/' render={() => <ConferenceList store={storeConferences}/>}/> : <Route exact path='/' render={() => <Authentification action={props.action}/>}/> }
                    {!props.logged ? <Route exact path='/sign-in'
                                                 render={() => <Authentification action={props.action}/>}/> : ''}
                    {!props.logged ? <Route exact path='/sign-up' component={Authentification}/> : ''}
                    <Redirect to='/'/>
                </Switch>
            </React.Fragment>
        );

};

export default RoutingBasicComponent
