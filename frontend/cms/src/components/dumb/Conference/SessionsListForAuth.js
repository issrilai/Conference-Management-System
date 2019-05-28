import React from 'react';
import {observer} from "mobx-react"
import uuidv1 from "uuid/v1";
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AuthorProposalComponent from '../AuthorProposalComponent'
import SessionListItem from "./SessionListItem";


function getModalStyle() {
    const top = -500;
    const left = -500;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const SessionListForAuth = observer(class ConferenceList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            confid: props.id,
        };
    }

    componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

    render() {
        const {sections} = this.props.store;
        return (
            <List className="listItems">
                {sections.map(value => (
                    value.confid_id === this.state.confid)
                    ? <SessionListItem session={value}/>
                    : null
                )}
            </List>
        );
    }

});

export default SessionListForAuth