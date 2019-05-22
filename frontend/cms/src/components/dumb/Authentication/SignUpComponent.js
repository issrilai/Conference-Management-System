import React, {Component} from 'react';
import {observer} from "mobx-react";
import {extendObservable} from "mobx";
import SignUpAuthorComponent from "./SignUpAuthorComponent";
import DefaultForm from "./DefaultForm";
import SignUpPcComponent from "./SignUpPcComponent";

export default observer(
    class SignUpComponent extends Component {

        constructor(props) {
            super(props);

            extendObservable(this, {
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                password: '',
                affiliation: '',
                confirmpass: '',
                listener: false,
                author: false,
                PC: false,
                website: '',
                reviewer: false,
                chair: false,
            });


            this.state = {
                currentForm: DefaultForm
            };

            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange = e => {
            const {name, value} = e.target;
            this[name] = value;
            console.log(name, value);
        };

        handleChangeActorType = e => {
            // let {chair, reviewer} = this.props;
            if (e.target.name === "reviewer") {
                this.chair = false;
                this.reviewer = true;
            }
            else {
                this.chair = true;
                this.reviewer = false;
            }
            console.log(this.chair, this.reviewer);
        };


        handleSubmit(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('The form was submitted with the following data:');
            console.log(this);

            const history = this.props.history;

            if (this.affiliation === "") {
                //if the new user has no affiliation, he is a listener
                fetch('http://127.0.0.1:8000/register-listener/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        username: this.username,
                        password: this.password,
                    })

                }).then(function (response) {
                    return response.json();
                })
                    .then(function (myJson) {
                        if (myJson === "ok") {
                            console.log("here should be an automatically signup")
                            history.push('/sign-in');
                        } else {
                            alert("Invalid data! Please try again")
                        }
                    });
            }
            if (this.affiliation !== "" && this.website === "") {
                fetch('http://127.0.0.1:8000/register-author/', {
                    //if the new user has affiliation, but does not have website, he is an author
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        affiliation: this.affiliation,
                    })

                }).then(function (response) {
                    return response.json();
                })
                    .then(function (myJson) {
                        if (myJson === "ok") {
                            history.push('/sign-in');
                        } else {
                            console.log("error");
                        }
                    });
            }
            console.log(JSON.stringify({
                firstname: this.firstname,
                password: this.lastname,
            }));
            if (this.reviewer === true) {
                fetch('http://127.0.0.1:8000/register-reviewer/', {
                    //    if the new user has both affiliation and website, he is a pc member
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        affiliation: this.affiliation,
                        website: this.website
                    })

                }).then(function (response) {
                    return response.json();
                })
                    .then(function (myJson) {
                        if (myJson === "ok") {
                            history.push('/sign-in');
                        } else {
                            console.log("error");
                        }

                    });
            }
            if (this.chair === true) {
                fetch('http://127.0.0.1:8000/register-chair/', {
                    //    if the new user has both affiliation and website, he is a pc member
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: JSON.stringify({
                        firstname: this.firstname,
                        lastname: this.lastname,
                        email: this.email,
                        username: this.username,
                        password: this.password,
                        affiliation: this.affiliation,
                        website: this.website
                    })

                }).then(function (response) {
                    return response.json();
                })
                    .then(function (myJson) {
                        if (myJson === "ok") {
                            history.push('/sign-in');
                        } else {
                            console.log("error");
                        }

                    });
            }
        }


        loadAuthorForm = e => {
            e.preventDefault();
            e.stopPropagation();

            console.log(e.target);
            this.setState({
                currentForm: SignUpAuthorComponent
            })
        };

        loadPCMemberForm = e => {
            e.preventDefault();
            e.stopPropagation();
            console.log(e.target);
            this.setState({
                currentForm: SignUpPcComponent
            })
        };

        render() {
            const {firstname, affiliation, lastname, email, username, password, confirmpass, listener, author, pc} = this;
            const props = {
                firstname,
                lastname,
                email,
                username,
                password,
                confirmpass,
                affiliation,
                handleSubmit: this.handleSubmit,
                handleChange: this.handleChange,
                loadAuthorForm: this.loadAuthorForm,
                loadPCMemberForm: this.loadPCMemberForm,
                handleChangeActorType: this.handleChangeActorType,
            };
            return (
                <div className="FormContent">
                    <this.state.currentForm {...props}/>
                </div>
            )
        }
    }
)
