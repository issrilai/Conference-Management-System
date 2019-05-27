import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import AuthorProposalComponent from '../AuthorProposalComponent'


  
  function getModalStyle() {
    const top = -500;
    const left = -500;
  
    return {
        width: 750,
        height:460,
        marginLeft:380,
        marginTop:80,


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
            confid: props.id,
            sid: 0,
          };
    }

    handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      componentDidMount() {
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

      render() {
        const {sections}= this.props.store;
        return (
          <List className= "listItems">
            {sections.map(value => (
              value.confid_id === this.state.confid)
              ?<ListItem key={value} role={undefined}>
                    <Button onClick={this.handleOpen}>Submit a proposal</Button>
                    <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div style={getModalStyle()} className= "paper">
                        <AuthorProposalComponent id={value.id} onSubmit={this.handleClose}/>
                    </div>
                    </Modal>
                <ListItemText primary={`${value.name} -  From ${value.startHour} to ${value.endHour}`} />
              </ListItem>
              :""
            )}
          </List>
        );
      }

});

export default SessionListForAuth