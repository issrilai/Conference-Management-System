import React from 'react';
import { observer } from "mobx-react"
import ConferenceToggle from './ConferenceComponent';
import HeaderComponent from '../HeaderComponent';

const ConferenceList = observer(class ConferenceList extends React.Component{

    constructor(props) {
        super(props);
    }

    render(){
        const {conferences} = this.props.store;
        const btns = [];
        this.props.store.loadConferences();

        const listOfConferences = conferences.map(conference => (
            <ConferenceToggle name={conference.name}/>
        ));
        return <div>
            <HeaderComponent btns={btns}/>
            <ul>
                {listOfConferences}
            </ul>
            </div>
        
    }
})

export default ConferenceList