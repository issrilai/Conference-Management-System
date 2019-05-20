import React from 'react';
import { observer } from "mobx-react"
import SectionToggle from './DropDownSectionComponent'
import HeaderComponent from '../HeaderComponent';

const SectionListDropDown = observer(class SectionListDropDown extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            confid: props.id
        }
    }

    componentDidMount() {
        //numai daca nu s-a facut requestul, il apelez
        // daca apelez loadConferences() in render, si fara niciun flag, render apeleaza la infint chestia
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

    render(){
        console.log(this.props);
        const {sections} = this.props.store;
        const listOfSections = sections.map(section => (
            section.confid_id == this.state.confid)
            ?<SectionToggle name={section.name} id={section.id}/>
            :<div></div>
        );
        return <div>
            <ul>
                {listOfSections}
            </ul>
            </div>

    }
});

export default SectionListDropDown