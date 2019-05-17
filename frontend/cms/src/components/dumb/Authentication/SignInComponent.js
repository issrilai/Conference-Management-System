import React, { Component } from 'react';
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import Cookies from "universal-cookie";

export default observer (
class SignInComponent extends Component {
    constructor(props) {
        super(props);
        extendObservable(this, {
            username: '',
            password: ''
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        const {name, value} = e.target;
        this[name] = value;
    };


    handleSubmit = e => {
        e.preventDefault();

        const cookies = new Cookies();

        console.log('The form was submitted with the following data:');
        const {username, password} = this;
        const action = this.props.action;
        const history = this.props.history;

        fetch('http://127.0.0.1:8000/auth/', {
           method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                    username: username,
                    password: password,
                })

        }).then(function(response) {
            return response.json();
        })
            .then(function(myJson)
            {
                if(myJson['session_key'] !== undefined)
                {
                    cookies.set('session_key', myJson['session_key'], /*{expires: new Date(Date.now() + 10000)}*/);
                    cookies.set('role', myJson['role'], /*{expires: new Date(Date.now() + 10000)}*/);
                    action();
                    history.push('/Home');
                }
                else
                {
                    alert("Bad credentials!");
                }
            });
    };

    render() {
        const {username, password} = this;
        return(
            <div className="FormContent">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="username">Username</label>
                        <input id="username" className="FormField_Input"  name="username" value={username} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="password">Password</label>
                        <input type="password" id="username" className="FormField_Input"  name="password" value={password} onChange={this.handleChange} />
                    </div>
                    <div className="NextButton">
                        <input type="submit" className="FormField_Link" value="Next"/>
                    </div>
                </form>
            </div>
        );
    }
}
)
