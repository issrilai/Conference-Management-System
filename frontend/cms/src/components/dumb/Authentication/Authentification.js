import React, {Component} from 'react';
import '../../../Authentication.css';
import {BrowserRouter, NavLink} from "react-router-dom";
import SignUpPcComponent from "./SignUpPcComponent";
import SignUpAuthorComponent from "./SignUpAuthorComponent";
import RoutingConfiguredComponent from "../../../RoutingConfiguredComponent";
import SignInComponent from './SignInComponent'


class Authentification extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
                <div className="Authentication">
                    <div className="CenterBox">
                        <div className="FormTitle">
                            <NavLink to="/sign-in" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign In</NavLink>
                            or
                            <NavLink to="/sign-up" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign Up</NavLink>
                        </div>
                        <div className="FormSwitcherContainer">
                            <RoutingConfiguredComponent/>
                        </div>
                            {/*TODO
                            SWHICH BETWEEN LOGIN AND SIGN UP FORM
                            */}
                            <SignInComponent action={this.props.action}/>
                        </div>
                        {/*<div className="NextButton">*/}
                        {/*    <Link to="/sign-in" className="FormField_Link">Next</Link>*/}
                        {/*</div>*/}
                    </div>
                </div>

        );
    }
}

export default Authentification;

