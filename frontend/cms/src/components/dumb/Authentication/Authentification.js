import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import './Authentication.css';
import SignUpComponent from './SignUpComponent'
import SignInComponent from './SignInComponent'
import SignUpAuthorComponent from "./SignUpAuthorComponent";
import SignUpPcComponent from "./SignUpPcComponent";

class Authentication extends Component {
    render() {
        return (
            <Router>
                <div className="Authentication">
                    <div className="CenterBox">
                        <div className="FormTitle">
                            <NavLink to="/" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign In</NavLink>
                            or
                            <NavLink to="/sign-up" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign Up</NavLink>
                        </div>

                        <div className="FormField">
                            <Link to="/" className="FormField_Link">Next</Link>
                        </div>

                        <Switch>
                            <Route path="/sign-up" component={SignUpComponent}>
                            </Route>
                            <Route path="/" component={SignInComponent}>
                            </Route>
                            <Route path="/sign-up-author" component={SignUpAuthorComponent}>
                            </Route>
                            <Route path="/sign-up/sign-up-pc" component={SignUpPcComponent}>
                            </Route>
                        </Switch>

                    </div>
                </div>
            </Router>
        );
    }
}
export default Authentication;