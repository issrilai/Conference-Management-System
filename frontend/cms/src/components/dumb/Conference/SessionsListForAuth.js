import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import SessionListItem from "./SessionListItem";



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