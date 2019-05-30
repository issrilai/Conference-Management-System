import * as React from "react";
import {observer} from "mobx-react";
import SectionDropDown from "./SectionDropDownForAssign";

class AssignPapersComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
          };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };

    componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadWishToReviewData();
        }
    }

    render() {

        const {wishToReviewData} = this.props.store;
        console.log(this.props.store.wishToReviewData);

        return (

            wishToReviewData.map((json) =>
                <SectionDropDown name={json.name} papers={json.papers}></SectionDropDown>
            )
            
            /*wishToReviewData.map((json) =>
                <div>SECTION {json.name}, {json.id}, {json.papers.map((paperJSON) =>
                    <div>PAPER {paperJSON.name}, {paperJSON.wishToReview.map((userJSON) =>
                    <div>reviwer: {userJSON.pcid.uid.last_name}</div>)}</div>)}</div>
                    )*/
        );

    }
}

export default observer(AssignPapersComponent);