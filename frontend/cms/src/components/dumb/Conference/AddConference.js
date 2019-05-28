import React from "react";
import TextField from "@material-ui/core/es/TextField/TextField";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import "../../../styles/AddConference.css"
import '../../../styles/Conference.css'
import FormControl from '@material-ui/core/FormControl';
import {observer} from "mobx-react";
import {extendObservable} from "mobx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';

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

export default withRouter(observer(
    class AddConference extends React.Component {

        constructor(props) {
            super(props);
            this.state = {
                expanded: null,

            };
            extendObservable(this, {
                name: '',
                startDate: '',
                endDate: '',
                abstractDeadline: '',
                submitDeadline: '',
                bidDeadline: '',
                reviewDeadline: '',
                members: []
            });
            this.handleChange = this.handleChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
        }

        componentDidMount() {
            if (this.props.store.loaded === false) {
                this.props.store.loadMembers();
            }
        }

        handleChangeExpansion = panel => (event, expanded) => {
            this.setState({
                expanded: expanded ? panel : false,
            });
        };

        handleChange = e => {
            const {name, value} = e.target;
            this[name] = value;
            console.log(name, value)
        };

        handleChangeMembers = e => {
            const {checked, value} = e.target;

            if (checked === true) {
                if (this.members.find((member) => {
                    return value === member;
                }) === undefined) {
                    this.members.push(value);
                }
            } else {
                const index_found = this.members.findIndex((member) => {
                    return value === member;
                });
                if (index_found !== -1) {
                    this.members.splice(index_found, 1);
                }
            }

            console.log(this.members);
        };

        handleSubmit(e) {
            e.preventDefault();
            e.stopPropagation();


            const {name, startDate, endDate, abstractDeadline, submitDeadline, bidDeadline, reviewDeadline, members} = this;
            const {history} = this.props;
            fetch('http://127.0.0.1:8000/add-conference/', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({
                    name: name,
                    startDate: startDate,
                    endDate: endDate,
                    abstractDeadline: abstractDeadline,
                    submitDeadline: submitDeadline,
                    bidDeadline: bidDeadline,
                    reviewDeadline: reviewDeadline,
                    reviewers: members
                })

            }).then(function (response) {
                return response.json();
            })
                .then(function (myJson) {
                    console.log(JSON.stringify(myJson));
                    history.push('/');
                });
        }

        render() {
            const {committeeMembers} = this.props.store;
            const {expanded} = this.state;
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
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
                                        style: {fontSize: 21}
                                    }}
                                    InputProps={{style: {marginTop: 37}}}
                                    fullWidth
                                />
                            </div>
                            <div className="inputField">
                                <ExpansionPanel expanded={expanded === 'panel1'}
                                                onChange={this.handleChangeExpansion('panel1')}>
                                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                                        <Typography className="heading">Select Program Committee Members</Typography>
                                    </ExpansionPanelSummary>
                                    <List className="listItems">
                                        {committeeMembers.map(member => (
                                            <ListItem key={member.uid.id} role={undefined} dense button>

                                                <ListItemIcon>
                                                    <Checkbox
                                                        value={member.uid.id}
                                                        onChange={this.handleChangeMembers}
                                                        edge="start"
                                                    />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={member.uid.first_name + " " + member.uid.last_name}/>
                                                <ListItemSecondaryAction>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        ))}
                                    </List>
                                </ExpansionPanel>
                            </div>

                        </FormControl>
                    </MuiThemeProvider>
                    <button className="ConferenceButton" onClick={this.handleSubmit}>Submit</button>
                </React.Fragment>
            )

        }
    }
));
