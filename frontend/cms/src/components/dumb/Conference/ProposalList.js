import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WishToReviewList from './WishToReviewList';

const ProposallList = observer(class PropList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
          };
    }

    componentDidMount() {
        //numai daca nu s-a facut requestul, il apelez
        // daca apelez loadConferences() in render, si fara niciun flag, render apeleaza la infint chestia
        if (this.props.store.loaded === false) {
            this.props.store.loadSections();
        }
    }

    render(){
        const {proposals}= this.props.store;
        return <List className= "listItems" style={{width: 90 + '%'}}>
            {proposals.map(value => (
              value.sid_id == this.state.id)
              ?<ListItem key={value} role={undefined}>
                <ListItemText primary={`${value.name}`} secondary={`${value.abstract}`} style={{width: 50 + '%'}}/>
                <WishToReviewList id={value.id}></WishToReviewList>
              </ListItem>
              :<div></div>
            )}
          </List>
    }
})

export default ProposallList