import React, { Component } from 'react';


class SignInComponent extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
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
            <div className="FormContent">
                <form onSubmit={this.handleSubmit} className="FormFields">
                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="username">Username</label>
                        <input id="username" className="FormField_Input"  name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="password">Password</label>
                        <input type="password" id="username" className="FormField_Input"  name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                </form>
            </div>

        );
    }
}
export default SignInComponent;