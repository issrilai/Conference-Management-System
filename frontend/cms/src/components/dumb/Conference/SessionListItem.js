import {ListItem} from "@material-ui/core";
import uuidv1 from "uuid/v1";
import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import AuthorProposalComponent from "../AuthorProposalComponent";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";


function getModalStyle() {
    return {
        width: 70+'%',
        height:460,
        marginLeft:15+'%',
        marginRight:15+'%',
        marginTop:30,
    };
}

class SessionListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = (id) => {
        this.setState({open: true, id: id});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {session} = this.props;
        return (
            <ListItem key={uuidv1()} role={undefined}>
                <Button onClick={() => this.handleOpen(session.id)}>Submit a proposal</Button>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <div style={getModalStyle()} className="paper">
                        <AuthorProposalComponent id={session.id} onSubmit={this.handleClose}/>
                    </div>
                </Modal>
                <ListItemText primary={`${session.name}. From ${session.startHour} to ${session.endHour}`}/>
            </ListItem>
        );
    }
}

export default SessionListItem;