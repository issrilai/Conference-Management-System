import {Route, Switch} from "react-router-dom";
import SignUpComponent from "./components/dumb/Authentication/SignUpComponent";
import React, {Component} from "react";
import SignInComponent from "./components/dumb/Authentication/SignInComponent";
import {withRouter} from "react-router";

class RoutingConfiguredComponent extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path='/' render={() => <SignInComponent action={this.props.action}/>}/>
                    <Route path="/sign-in" render={() => <SignInComponent action={this.props.action}/>}/>
                    <Route path="/sign-up" component={withRouter(SignUpComponent)}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default RoutingConfiguredComponent;