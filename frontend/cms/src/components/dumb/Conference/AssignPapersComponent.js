import * as React from "react";
import {observer} from "mobx-react";

class AssignPapersComponent extends React.Component {

    constructor(props) {
        super(props);
    }

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
                <div>SECTION {json.name}, {json.id}, {json.papers.map((paperJSON) =>
                    <div>PAPER {paperJSON.name}</div>)}</div>
            )
        );

    }
}

export default observer(AssignPapersComponent);