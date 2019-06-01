import * as React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import "../../styles/AddConference.css"
import {createMuiTheme, MuiThemeProvider, RadioGroup} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import {extendObservable} from "mobx";
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

class ReviewFormComponent extends React.Component {

    constructor(props) {
        super(props);
        extendObservable(this, {
            suggestions: "",
            qualifier: "",
            paper: this.props.pid,
            name: this.props.name,
        });
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        const cookies = new Cookies();
        e.preventDefault();
        e.stopPropagation();
        console.log('The form was submitted with the following data:');
        console.log(this);
        const {suggestions, qualifier, reviewer, paper} = this;
        console.log(suggestions, qualifier);
        fetch('http://127.0.0.1:8000/review-result/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                qualifier: qualifier,
                suggestions: suggestions,
                reviewer: cookies.get('session_key'),
                paper: paper,
            })

        }).then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
        console.log(JSON.stringify({
            suggestions, qualifier
        }));
    }

    handleChange = e => {
        const {name, value} = e.target;
        this[name] = value;
        console.log(name, value)
    };

    render() {
        return (
            <React.Fragment>
                <MuiThemeProvider theme={theme}>
                    <h1>Review Paper: {this.props.name}</h1>
                    <FormControl component="fieldset">
                        <RadioGroup aria-label="position" name="qualifier" onChange={this.handleChange} row>
                            <FormControlLabel
                                value="strong_accept"
                                control={<Radio color="primary"/>}
                                label="Strong accept"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="accept"
                                control={<Radio color="primary"/>}
                                label="Accept"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="weak_accept"
                                control={<Radio color="primary"/>}
                                label="Weak Accept"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="borderline_paper"
                                control={<Radio color="primary"/>}
                                label="Borderline"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="weak_reject"
                                control={<Radio color="primary"/>}
                                label="Weak Reject"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="reject"
                                control={<Radio color="primary"/>}
                                label="Reject"
                                labelPlacement="start"
                            />
                            <FormControlLabel
                                value="strong_reject"
                                control={<Radio color="primary"/>}
                                label="Strong Reject"
                                labelPlacement="start"
                            />
                        </RadioGroup>
                        <TextField
                            label="Suggestions"
                            multiline={true}
                            rows={2}
                            rowsMax={4}
                            onChange={this.handleChange}
                            name="suggestions"

                        />
                        <button className="ConferenceButton" onClick={this.handleSubmit}>Submit</button>
                    </FormControl>
                </MuiThemeProvider>
            </React.Fragment>

        )
    }
}

export default ReviewFormComponent