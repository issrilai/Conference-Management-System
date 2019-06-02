import * as React from "react";
import {observer} from "mobx-react";
import SectionDropDown from "./SectionDropDownForAssign";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PaperComponent from "./PaperComponent";
import ReviewFormComponent from "../ReviewFormComponent";
import Checkbox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText";
import '../../../styles/Conference.css';
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AuthorProposalComponent from "../AuthorProposalComponent";


function getModalStyle() {
    const top = -500;
    const left = -500;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

class PapersList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: null,
            open: false
            //papers: props.papers
        };
    }

    handleChange = panel => (event, expanded) => {
        this.setState({
            expanded: expanded ? panel : false,
        });
    };

    componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadPapers();
        }
    }

    handleOpen = (id) => {
        this.setState({open: true, id: id});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {

        //alert(this.props.store.get());

        const lista = this.props.store.papers.map((paper) => (
            <ListItem dense button role={undefined}>
                <Button onClick={() => this.handleOpen(paper.prid.id)}>Review</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className="paper">
                        <ReviewFormComponent name={paper.prid.name} pid={paper.prid.id} />
                    </div>
                </Modal>
                <ListItemText primary={`${paper.prid.name}`}/>
            </ListItem>

        ));

        return (
            <List className= "listItems">
                {lista}
            </List>
        );

    }
}

export default PapersList