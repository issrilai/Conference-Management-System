import * as React from "react";
import {observer} from "mobx-react";
import SectionDropDown from "./SectionDropDownForAssign";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

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

        const lista = wishToReviewData.map((json) => (
                <SectionDropDown name={json.name} papers={json.papers} />));

        return (
            <React.Fragment>
                <ul>
                    {lista}
                </ul>

            </React.Fragment>
        );

    }
}

export default observer(AssignPapersComponent);