import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import "../../../styles/AuthorProposal.css"
import FormControl from '@material-ui/core/FormControl';
import {observer} from "mobx-react";
import {extendObservable} from "mobx";


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

export default observer(
    class AddConference extends React.Component {
        constructor(props) {
            super(props);
            extendObservable(this, {
                name: '',
                startDate: '',
                endDate: '',
                abstractDeadline: '',
                submitDeadline: '',
                bidDeadline: '',
                reviewDeadline: ''
            });
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleChange = e => {
            const {name, value} = e.target;
            this[name] = value;
            console.log(name, value)
        };

        handleSubmit(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('The form was submitted with the following data:');
            console.log(this);
            const {name, startDate, endDate, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline} = this;
            fetch('http://127.0.0.1:8000/add-conference/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    name: name,
                    startDate:startDate,
                    endDate: endDate,
                    abstractDeadline: abstractDeadline,
                    submitDeadline: submitDeadline,
                    bidDeadline: bidDeadline,
                    reviewDeadline: reviewDeadline
                })

            }).then(function(response) {
                return response.json();
            })
                .then(function(myJson) {
                    console.log(JSON.stringify(myJson));
                });
            console.log(JSON.stringify({
                name: name,
                startDate: startDate,
            }));
        }

        componentDidMount() {
            console.log("Conference Component mounted")
        }

        render() {
            const {name, startDate, endDate, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline} = this;
            return (
                <React.Fragment>
                    <MuiThemeProvider theme={theme}>
                        <FormControl className="root" onSubmit={this.handleSubmit}>
                            <div className="inputField">
                                <TextField
                                    label="Name"
                                    id="name"
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
                                    id="startDate"
                                    value={startDate}
                                    label="Conference Start Date"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    name="startDate"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="inputField">
                                <TextField
                                    id="endDate"
                                    label="Conference End Date"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    value={endDate}
                                    name="endDate"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="inputField">
                                <TextField
                                    id="datetime-local"
                                    label="Abstract Submit Deadline"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    value={abstractDeadline}
                                    name="abstractDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="inputField">
                                <TextField
                                    id="datetime-local"
                                    label="Paper Submit Deadline"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    value={submitDeadline}
                                    name="submitDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="inputField">
                                <TextField
                                    id="datetime-local"
                                    label="Bid Deadline"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    value={bidDeadline}
                                    name="bidDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                            <div className="inputField">
                                <TextField
                                    id="datetime-local"
                                    label="Review Deadline"
                                    type="date"
                                    defaultValue="2019-05-24"
                                    value={reviewDeadline}
                                    name="reviewDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />
                            </div>
                        </FormControl>
                    </MuiThemeProvider>
                    <button className="FormField_Link" onClick={this.handleSubmit}>Submit</button>
                </React.Fragment>
            )

        }
    }
)
