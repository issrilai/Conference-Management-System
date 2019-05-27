import React, {Component} from 'react';
import '../../../Authentication.css';
import {NavLink} from "react-router-dom";
import RoutingConfiguredComponent from "../../../RoutingConfiguredComponent";


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
                            <RoutingConfiguredComponent history={this.props.history} action={this.props.action}/>
                        </div>
                    </div>
                </div>

        );
    }
}

export default Authentification;

