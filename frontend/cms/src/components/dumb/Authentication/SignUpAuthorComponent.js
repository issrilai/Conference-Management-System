import React, { Component } from 'react';

class SignUpAuthorComponent extends Component {
    constructor() {
        super();

        this.state = {
            affiliation:''
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
                    <div className="FormField_Author">
                        <label className="FormField_Label" htmlFor="username">Affiliation</label>
                        <input id="affiliation" className="FormField_Input"  name="affiliation" value={this.state.affiliation} onChange={this.handleChange} />
                    </div>
                </form>
            </div>

        );
    }
}
export default SignUpAuthorComponent;