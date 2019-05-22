import React from 'react';
import { observer } from "mobx-react"
import ConferenceToggle from './ConferenceComponent';
import HeaderComponent from '../HeaderComponent';
import Cookies from "universal-cookie";

// const ConferenceList = observer(
class ConferenceList extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //numai daca nu s-a facut requestul, il apelez
        // daca apelez loadConferences() in render, si fara niciun flag, render apeleaza la infint chestia
        if (this.props.store.loaded === false) {
            this.props.store.loadConferences();
        }
    }

    render(){
        console.log(this.props);
        const {conferences} = this.props.store;
        console.log(conferences);

        const listOfConferences = conferences.map(conference => (
            <ConferenceToggle name={conference.name} id={conference.id}/>
        ));

        return (
            <ul>
                {listOfConferences}
            </ul>
        )

    }
}

export default ConferenceList