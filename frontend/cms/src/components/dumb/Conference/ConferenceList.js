import React from 'react';
import ConferenceToggle from './ConferenceComponent';
import uuidv1 from "uuid/v1";

import {observer} from "mobx-react";

class ConferenceList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadConferences();
        }
    }

    render() {
        const {conferences} = this.props.store;

        const listOfConferences = conferences.map(conference => (
            <ConferenceToggle key={uuidv1()} name={conference.name} id={conference.id} dateStart={conference.dateStart} dateStop={conference.dateStop} bid={conference.bidDeadline} submit={conference.submitDeadline}/>
        ));
        console.log(conferences.length);
        return (
            <React.Fragment>
                <ul>
                    {listOfConferences}
                </ul>

            </React.Fragment>
        )

    }
}

export default observer(ConferenceList);