import React from 'react';
import { observer } from "mobx-react"
import SectionToggle from './DropDownSectionComponent'

const SectionListDropDown = observer(class SectionListDropDown extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            confid: props.id
        }
    }

    componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

    render(){
        console.log(this.props);
        const {sections} = this.props.store;
        const listOfSections = sections.map(section => (
            section.confid_id === this.state.confid)
            ?<SectionToggle name={section.name} id={section.id}/>
            :""
        );
        return <div style={{width: 90 + '%'}}>
            <ul>
                {listOfSections}
            </ul>
            </div>

    }
});

export default SectionListDropDown