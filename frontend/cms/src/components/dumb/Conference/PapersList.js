import * as React from "react";
import {observer} from "mobx-react";
import SectionDropDown from "./SectionDropDownForAssign";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PaperComponent from "./PaperComponent";

class PapersList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
            papers: props.papers
          };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };


    render() {

        const lista = this.state.papers.map((paper) => (
                <PaperComponent name={paper.name} reviewers={paper.wishToReview} id={paper.id} />));

        return (
            <React.Fragment >
                <ul style={{width: 90 + '%'}}>
                    {lista}
                </ul>

            </React.Fragment>
        );

    }
}

export default PapersList