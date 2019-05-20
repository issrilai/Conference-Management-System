import React from 'react';
import { observer } from "mobx-react"
import ConferenceToggle from './ConferenceComponent';
import HeaderComponent from '../HeaderComponent';
import Cookies from "universal-cookie";

const ConferenceList = observer(class ConferenceList extends React.Component{

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
        const cookies = new Cookies();
        console.log(this.props);
        const {conferences} = this.props.store;
        console.log(conferences);
        let btns = [];
        if (cookies.get('role') === "listener") {
            btns = ["SIGN OUT"]
        }
        if (cookies.get('role') === 'author') {
            btns = ["authorButton","SIGN OUT"]
        }
        if (cookies.get('role') === "cm" ) {
            btns = ["ADD CONFERENCE", "SIGN OUT"]
        }
        console.log(btns);
        const listOfConferences = conferences.map(conference => (
            <ConferenceToggle name={conference.name} id={conference.id}/>
        ));
        return <div>
            <HeaderComponent btns={btns}/>
            <ul>
                {listOfConferences}
            </ul>
            </div>

    }
});

export default ConferenceList