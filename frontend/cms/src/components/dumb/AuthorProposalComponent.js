import React, {Component} from 'react'
import '../../AuthorProposal.css'
import '../../Authentication.css'
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import NextButtonComponent from "./NextButtonComponent";
import {Link} from "react-router-dom";
import Router from "react-router-dom/es/Router";

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


class AuthorProposalComponent extends  Component {

    constructor() {
        super();

        this.state = {
            name:'',
            keywords:'',
            abstract:'',
            proposal:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    render() {
        return(
            <MuiThemeProvider theme={theme}>
                <form onSubmit={this.handleSubmit} className="root">
                    <div className="inputField">
                        <TextField
                            required
                            label="Title"
                            className='textField'
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange('name')}
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
                            value={this.state.keywords}
                            onChange={this.handleChange('keywords')}
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
                            value={this.state.abstract}
                            onChange={this.handleChange('abstract')}
                            className="textField"
                            margin="normal"
                            variant={"outlined"}
                        />
                    </div>

                    <div className="inputField">
                        <div className="submitText">Submit the proposal in PDF format</div>
                        <input required type="file" accept="application/pdf" className="inputPdf" name="proposal" value={this.state.proposal} onChange={this.handleChange('proposal')} />
                    </div>
                    <div className="NextButton NextButtonAuthor">
                        <input type="submit" className="FormField_Link"/>
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }
}

export default AuthorProposalComponent;