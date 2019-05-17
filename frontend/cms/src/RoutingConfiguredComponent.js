import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
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
            <HashRouter>
                <Switch>
                    <Route exact path='/' render={() => <SignInComponent history={this.props.history} action={this.props.action}/>}/>
                    <Route path="/sign-in" render={() => <SignInComponent history={this.props.history} action={this.props.action}/>}/>
                    <Route path="/sign-up" component={withRouter(SignUpComponent)}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default RoutingConfiguredComponent;