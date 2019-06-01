import React, {Component} from 'react'
import '../../../styles/Conference.css'
import '../../../Authentication.css'
import '../../../styles/AuthorProposal.css'
import storeConferences from '../../smart/getConferenceComponent'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import {extendObservable} from "mobx";
import TextField from "@material-ui/core/es/TextField";
import FormControl from "@material-ui/core/FormControl";
import {observer} from "mobx-react";
import Cookies from "universal-cookie";

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

const UpdateConference = observer(class UpdateConference extends React.Component{

    constructor(props) {
        super(props);

        extendObservable(this, {
            name:'',
            dateStart:'',
            dateStop:'',
            abstractDeadline:'',
            submitDeadline:'',
            bidDeadline:'',
            reviewDeadline:'',
            confID:this.props.match.params.confID,

        });

        this.handleChange = this.handleChange.bind(this);

    }
    componentDidMount() {
        if (storeConferences.loaded === false) {
            storeConferences.loadConferences();
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

        fetch('http://127.0.0.1:8000/update-conference/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                confID:this.confID,
                name:this.name,
                dateStart:this.dateStart,
                dateStop:this.dateStop,
                abstractDeadline:this.abstractDeadline,
                submitDeadline:this.submitDeadline,
                bidDeadline:this.bidDeadline,
                reviewDeadline:this.reviewDeadline,
            })

        }).then(function(response) {
            return response.json();
        })
            .then(function(myJson) {
                console.log(JSON.stringify(myJson));
            });
        console.log(JSON.stringify({
            confID:this.confID,
            name:this.name,
            dateStart:this.dateStart,
            dateStop:this.dateStop,
            abstractDeadline:this.abstractDeadline,
            submitDeadline:this.submitDeadline,
            bidDeadline:this.bidDeadline,
            reviewDeadline:this.reviewDeadline,
        }));

    };


    render() {
        const {name, dateStart, dateStop, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline, confID} = this;
        const {conferences}= storeConferences;
        return(
            <MuiThemeProvider theme={theme}>
                {conferences.map(value =>
                    (value.id == confID)
                        ?<form onSubmit={this.handleSubmit} className="root">
                            <div className="inputField" id ="name" style={{marginTop:56, fontWeight:900, fontSize:20}}>
                                {value.name}
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="startDate"
                                    label="Update conference start date"
                                    type="date"
                                    defaultValue={value.dateStart}
                                    value={dateStart}
                                    name="dateStart"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="dateStop"
                                    label="Update conference end date"
                                    type="date"
                                    defaultValue={`${value.dateStop}`}
                                    value={dateStop}
                                    name="dateStop"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="abstractDeadline"
                                    label="Update the abstract deadline"
                                    type="date"
                                    defaultValue={`${value.abstractDeadline}`}
                                    value={abstractDeadline}
                                    name="abstractDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="submitDeadline"
                                    label="Update the submit deadline"
                                    type="date"
                                    defaultValue={`${value.submitDeadline}`}
                                    value={submitDeadline}
                                    name="submitDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="bidDeadline"
                                    label="Update the bid deadline"
                                    type="date"
                                    defaultValue={`${value.bidDeadline}`}
                                    value={bidDeadline}
                                    name="bidDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField" style={{marginTop:56}}>
                                <TextField
                                    id="reviewDeadline"
                                    label="Update the review deadline"
                                    type="date"
                                    defaultValue={`${value.reviewDeadline}`}
                                    value={reviewDeadline}
                                    name="reviewDeadline"
                                    onChange={this.handleChange}
                                    InputLabelProps={{
                                        shrink: true,
                                        style: {fontSize: 21, color:'black'}
                                    }}
                                    InputProps={{style : {marginTop:37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="NextButton NextButtonAuthor">
                                <input type="submit" className="FormField_Link"/>
                            </div>
                        </form>
                        :""
                )}

            </MuiThemeProvider>
        )
    }

});
export default UpdateConference;