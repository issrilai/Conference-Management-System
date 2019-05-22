import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const SessionList = observer(class ConferenceList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            checked: [0],
            id: props.id,
          };
    }

      handleToggle = value => () => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
    
        if (currentIndex === -1) {
          newChecked.push(value);
        } else {
          newChecked.splice(currentIndex, 1);
        }
    
        this.setState({
          checked: newChecked,
        });
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
              ?<ListItem key={value} role={undefined} dense button onClick={this.handleToggle(value)}>
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`${value.name}. From ${value.startHour} to ${value.endHour}`} />
              </ListItem>
              :<div></div>
            )}
          </List>
        );
      }

});

export default SessionList