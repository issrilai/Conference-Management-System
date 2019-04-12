import React, { Component } from 'react';
import {Link, NavLink,  HashRouter as Router,} from 'react-router-dom';
import SignInComponent from "./SignInComponent";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import SignUpAuthorComponent from "./SignUpAuthorComponent";
import SignUpPcComponent from "./SignUpPcComponent";


class SignUpComponent extends Component {

    constructor() {
        super();

        this.state = {
            firstname:'',
            lastname:'',
            email: '',
            username:'',
            password: '',
            confirmpass:'',
            listener:false,
            author:false,
            PC:false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    render() {
        return(
            <Router>
                <div className="FormContent">
                    <form onSubmit={this.handleSubmit} className="SignUpFields">
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" className="First_Input" placeholder="Enter your first name" name="firstname" value={this.state.firstname} onChange={this.handleChange} />
                            </div>

                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" className="First_Input" placeholder="Enter your last name" name="lastname" value={this.state.lastname} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="username">Username</label>
                                <input type="text" id="username" className="First_Input" placeholder="Enter a username" name="username" value={this.state.username} onChange={this.handleChange} />
                            </div>

                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="First_Input" placeholder="Enter a password" name="password" value={this.state.password} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="email">Email</label>
                                <input type="email" id="email" className="First_Input" placeholder="Enter your email address" name="email" value={this.state.email} onChange={this.handleChange} />
                            </div>
                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="confirmpass">Password</label>
                                <input type="confirmpass" id="confirmpass" className="First_Input" placeholder="Confirm your password" name="confirmpass" value={this.state.confirmpass} onChange={this.handleChange} />
                            </div>
                        </div>
                        <div className="FRow">
                            <label className="First_Field">
                                <NavLink to="/sign-up-author" className="Forward">I'm an author</NavLink>
                            </label>
                            <label className="First_Field">
                                <NavLink to="/sign-up-pc" className="Forward2">I'm a PC member</NavLink>
                            </label>
                        </div>
                    </form>
                </div>
            </Router>
        );
    }
}
export default SignUpComponent;