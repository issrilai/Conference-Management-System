import React from 'react';
import '../../../styles/Conference.css'
import '../../../Authentication.css'
import SessionList from './SessionsList'
import SessionListForAuth from './SessionsListForAuth'
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
import AddSectionComponent from "./AddSectionComponent";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import Moment from 'react-moment';

function getModalStyle() {
    return {
        width: 70+'%',
        height:460,
        marginLeft:15+'%',
        marginRight:15+'%',
        marginTop:30,
    };
}

const ConfToggle = observer(class ConferenceToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateStart: props.dateStart,
            dateStop: props.dateStop,
            open: false,
            expanded: null,
            name: props.name,
            id: props.id,
            bidDeadline: props.bid,
            submitDeadline: props.submit,
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };


    handleOpen = (id) => {
        this.setState({open: true, id: id});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    show() {
        var today = new Date();
        var bid = new Date(this.state.bidDeadline);
        var submit = new Date(this.state.submitDeadline);

        const cookies = new Cookies();
        if (cookies.get('role') === "listener") {
            return <SessionList store={storeSections} id={this.state.id}/>
        } else if (cookies.get('role') === "author") {
            if(today < submit)
                return <SessionListForAuth store={storeSections} id={this.state.id}/>
            else
                return <div>Submitting period is over!</div>
        } else if (cookies.get('role') === "reviewer") {
            if(today < bid)
                return <SectionListDropDown store={storeSections} id={this.state.id}/>
            else
                return <div>Biding period is over!</div>
        } else if (cookies.get('role') === "chair") {
            return <SectionListDropDown store={storeSections} id={this.state.id}/>
        }
    }

    addSectionButton() {
        const cookies = new Cookies();
        if (cookies.get('role') === "chair") {
            return <div>
                <Button onClick={() => this.handleOpen(this.state.id)}>Add section</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className="paper">
                        <AddSectionComponent confId={this.state.id} onSubmit={this.handleClose}/>
                    </div>
                </Modal>
            </div>
        }
    }

    showButtonUpdate = (id) => {
        const cookies = new Cookies();
        console.log(id);
        if (cookies.get('role') === "chair") {
            return (
                <Link to={"/updateConference/" + id + "/"} name="Update conference" style={{fontWeight: 900, color: '#725AC1'}}>UPDATE
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
                    <Typography className="secondaryHeading">{this.state.dateStart} | {this.state.dateStop}</Typography>
                    <Typography className="secondaryHeading">{this.addSectionButton()}</Typography>
                    <Typography className="secondaryHeading"> {this.showButtonUpdate(this.state.id)}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    {this.show()}
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
});


export default ConfToggle;