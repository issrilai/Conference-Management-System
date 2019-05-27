import React from 'react';
import '../../../styles/Conference.css'
import '../../../Authentication.css'
import SessionList from './SessionsList'
import SessionListForAuth from './SessionsListForAuth'
import UpdateConference from "./UpdateConference";
import storeSections from '../../smart/getSectionsComponent'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import SectionListDropDown from './SectionListDropDown';
import Cookies from "universal-cookie";
import {observer} from "mobx-react";
import {Link, Switch, Route} from "react-router-dom";
import {Router} from "react-router";

const ConfToggle = observer(class ConferenceToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: null,
            name: props.name,
            id: props.id
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    show() {
        const cookies = new Cookies();
        if (cookies.get('role') === "listener") {
            return <SessionList store={storeSections} id={this.state.id}/>
        } else if (cookies.get('role') === "author") {
            return <SessionListForAuth store={storeSections} id={this.state.id}/>
        } else if (cookies.get('role') === "reviewer" || cookies.get('role') === "chair") {
            return <SectionListDropDown store={storeSections} id={this.state.id}/>
        }
    }

    showButton = (id) => {
        const cookies = new Cookies();
        console.log(id);
        if (cookies.get('role') === "chair") {
            return (

                <Link to={"/updateConference/" + id} name="Update conference" style={{fontWeight: 900, color: '#725AC1'}}>UPDATE
                    CONFERENCE</Link>
            )
        }
    };

    render() {
        const {expanded} = this.state;
        return (
            <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>}>
                    <Typography className="heading">{this.state.name}</Typography>
                    {this.showButton(this.state.id)}
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.show()}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
});

export default ConfToggle;