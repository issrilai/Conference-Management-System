import React from 'react'
import '../../../styles/Conference.css'
import '../../../Authentication.css'
import '../../../styles/AuthorProposal.css'
import storeConferenceById from '../../smart/getConferenceByID'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {extendObservable} from "mobx";
import TextField from "@material-ui/core/es/TextField";
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

const UpdateConference = observer(class UpdateConference extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentDidMount() {
        storeConferenceById.id = this.props.match.params.confID;
        storeConferenceById.loadConference();
    }

    handleChange = e => {
        const {name, value} = e.target;
        storeConferenceById.conference[name] = value;
        console.log(name, value);
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
                confID: storeConferenceById.conference.id,
                name: storeConferenceById.conference.name,
                dateStart: storeConferenceById.conference.dateStart,
                dateStop: storeConferenceById.conference.dateStop,
                abstractDeadline: storeConferenceById.conference.abstractDeadline,
                submitDeadline: storeConferenceById.conference.submitDeadline,
                bidDeadline: storeConferenceById.conference.bidDeadline,
                reviewDeadline: storeConferenceById.conference.reviewDeadline,
            })

        }).then(function (response) {
            return response.json();
        })
            .then(function (myJson) {
                console.log(JSON.stringify(myJson));
            });
        console.log(JSON.stringify({
            confID: storeConferenceById.conference.id,
            name: storeConferenceById.conference.name,
            dateStart: storeConferenceById.conference.dateStart,
            dateStop: storeConferenceById.conference.dateStop,
            abstractDeadline: storeConferenceById.conference.abstractDeadline,
            submitDeadline: storeConferenceById.conference.submitDeadline,
            bidDeadline: storeConferenceById.conference.bidDeadline,
            reviewDeadline: storeConferenceById.conference.reviewDeadline,
        }));

        storeConferenceById.loaded = false;
        storeConferenceById.id = -1;

    };


    render() {
        const {name, dateStart, dateStop, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline, confID} = storeConferenceById.conference;
        return (
            <MuiThemeProvider theme={theme}>
                <form onSubmit={this.handleSubmit} className="root">
                    <div className="inputField" id="name" style={{marginTop: 56, fontWeight: 900, fontSize: 20}}>
                        {storeConferenceById.conference.name}
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="startDate"
                            label="Update conference start date"
                            type="date"
                            value={dateStart}
                            defaultValue={storeConferenceById.conference.dateStart}
                            name="dateStart"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="dateStop"
                            label="Update conference end date"
                            type="date"
                            defaultValue={storeConferenceById.conference.dateStop}
                            value={dateStop}
                            name="dateStop"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="abstractDeadline"
                            label="Update the abstract deadline"
                            type="date"
                            defaultValue={storeConferenceById.conference.abstractDeadline}
                            value={abstractDeadline}
                            name="abstractDeadline"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="submitDeadline"
                            label="Update the submit deadline"
                            type="date"
                            defaultValue={storeConferenceById.conference.submitDeadline}
                            value={submitDeadline}
                            name="submitDeadline"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="bidDeadline"
                            label="Update the bid deadline"
                            type="date"
                            defaultValue={storeConferenceById.conference.bidDeadline}
                            value={bidDeadline}
                            name="bidDeadline"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="inputField" style={{marginTop: 56}}>
                        <TextField
                            id="reviewDeadline"
                            label="Update the review deadline"
                            type="date"
                            defaultValue={storeConferenceById.conference.reviewDeadline}
                            value={reviewDeadline}
                            name="reviewDeadline"
                            onChange={this.handleChange}
                            InputLabelProps={{
                                shrink: true,
                                style: {fontSize: 21, color: 'black'}
                            }}
                            InputProps={{style: {marginTop: 37}}}
                            fullWidth
                        />
                    </div>
                    <div className="NextButton NextButtonAuthor">
                        <input type="submit" className="FormField_Link"/>
                    </div>
                </form>
            </MuiThemeProvider>
        )
    }

});
export default UpdateConference;