import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AuthorProposalComponent from '../AuthorProposalComponent'

  
  function getModalStyle() {
    const top = -500;
    const left = -500;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const SessionListForAuth = observer(class ConferenceList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            id: props.id,
          };
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      componentDidMount() {
        //numai daca nu s-a facut requestul, il apelez
        // daca apelez loadConferences() in render, si fara niciun flag, render apeleaza la infint chestia
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

      render() {
        const {sections}= this.props.store;
        //asta trebuie mutata intr-un "component did mount"
        //nu se fac fetchuri in render
        //  vezi conferenceList si getConferenceComponent
        // this.props.store.loadSections(this.state.id);

        return (
          <List className= "listItems">
            {sections.map(value => (
              value.confid_id == this.state.id)
              ?<ListItem key={value} role={undefined}>
                    <Button onClick={this.handleOpen}>Submit a proposal</Button>
                    <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div style={getModalStyle()} className= "paper">
                        <AuthorProposalComponent id={value.id}></AuthorProposalComponent>
                    </div>
                    </Modal>
                <ListItemText primary={`${value.name}. From ${value.startHour} to ${value.endHour}`} />
              </ListItem>
              :<div></div>
            )}
          </List>
        );
      }

});

export default SessionListForAuth