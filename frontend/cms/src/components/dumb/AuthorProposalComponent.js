import React, {Component} from 'react'
import '../../styles/AuthorProposal.css'
import '../../Authentication.css'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import Cookies from 'universal-cookie';

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
            proposal:''
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            id: props.id,
        }
    }
    handleChange = e => {
        const {name, value} = e.target;
        this[name] = value;
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
                sid_id: this.state.id,
                session_key: cookies.get('session_key'),
            })

        }).then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
        console.log(JSON.stringify({
            name: this.name,
            keywords: this.keywords,
            abstract: this.abstract,
            proposal: this.proposal,
        }));

    };

    render() {
        const {name, keywords, abstract, proposal} = this;
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
                    <div className="NextButton NextButtonAuthor">
                        <input type="submit" className="FormField_Link"/>
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }
})

export default AuthorProposalComponent
