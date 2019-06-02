import React, {Component} from 'react'
import '../../styles/AuthorProposal.css'
import '../../Authentication.css'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import Cookies from 'universal-cookie';
import axios, {post} from 'axios';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#725AC1",
        },
        secondary: {
            main: '#8D86C9',
        },
        inherit: {
            main: '#AA9FCE',
        },
    },
});
const AuthorProposalComponent =  observer (
class AuthorProposalComponent extends  Component {

    constructor(props) {
        super(props);

        extendObservable(this, {
            name:'',
            keywords:'',
            abstract:'',
            proposal:'',
        });

        this.state = {
            files: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = e => {
        const {name, value} = e.target;
        const files = e.target.files;
        this[name] = value;

        this.setState({files: files});
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit()
        }
        const cookies = new Cookies();

        console.log('The form was submitted with the following data:');
        console.log(this.props);
        const {username, password} = this;
        fetch('http://127.0.0.1:8000/submit-proposal/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                name: this.name,
                keywords: this.keywords,
                abstract: this.abstract,
                proposal: this.proposal,
                sid_id: this.props.id,
                session_key: cookies.get('session_key'),
            })

        }).then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
        //
        // let reader = new FileReader();
        // reader.readAsDataURL(this.state.files[0]);
        //
        // reader.onload=(e)=>{

        let formData = new FormData();
        formData.append('pdf', this.state.files[0]);

        alert(this.state.files[0].type);

        fetch("http://127.0.0.1:8000/get_pdf_view/", {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/pdf',
            },
            body: JSON.stringify({
                file: this.state.files[0],
            })

        }).then( function (response) {
            return response.json();
        }).then(function (response_json) {
            console.log(JSON.stringify(response_json));
        });
        // };
    };

    render() {
        const {name, keywords, abstract, proposal} = this;
        console.log(this.props);
        return(
            <MuiThemeProvider theme={theme}>
                <form onSubmit={this.handleSubmit} className="root">
                    <div className="inputField">
                        <TextField
                            required
                            label="Title"
                            className='textField'
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant={"outlined"}
                        />
                    </div>
                    <div className="inputField">
                        <TextField
                            required
                            label="Keywords"
                            className='textField'
                            name="keywords"
                            value={keywords}
                            onChange={this.handleChange}
                            margin="normal"
                            variant={"outlined"}
                        />
                    </div>
                    <div className="inputField">
                        <TextField
                            multiline
                            required
                            label="Abstract"
                            rowsMax="8" name="abstract"
                            value={abstract}
                            onChange={this.handleChange}
                            className="textField"
                            margin="normal"
                            variant={"outlined"}
                        />
                    </div>

                    <div className="inputField">
                        <div className="submitText">Submit the proposal in PDF format</div>
                        <input required type="file" accept="application/pdf" className="inputPdf" name="proposal" value={proposal} onChange={this.handleChange} />
                    </div>
                    <div>
                        <input type="submit" className="FormField_Link"/>
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }
})

export default AuthorProposalComponent
