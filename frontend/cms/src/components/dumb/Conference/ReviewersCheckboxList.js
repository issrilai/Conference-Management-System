import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/Conference.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class ReviewersCheckboxList extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            checked: [0],
            reviewers: props.reviewers,
            prid: props.prid
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

      handleSubmit = e => {

        e.preventDefault();
        //console.log(bif.pcid.uid.first_name)
        this.state.checked.map((bif) => 
            bif != 0
            ?fetch('http://127.0.0.1:8000/assign_papers/', {
              method: 'POST',
              headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                      prid_id: this.state.prid,
                      rid_id: bif.id,
                  })
            }).then(function(response) {
                if(response.status === 200)
                  alert("ok");
                else
                  response.text().then(function(data){
                    alert(data);
                  })
              })
        :<div></div>
        )
    }

      render() {

        return (
          <List className= "listItems" style={{width: 90 + '%'}}>
            {this.state.reviewers.map(rev => (
              <ListItem key={rev} role={undefined} dense button onClick={this.handleToggle(rev)}>
                <Checkbox
                  checked={this.state.checked.indexOf(rev) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={`${rev.pcid.uid.first_name} ${rev.pcid.uid.last_name}`} />
              </ListItem>
            )
            )}
            <div className="NextButton">
              <button type="submit" className="FormField_Link" onClick={this.handleSubmit}>Submit</button>
            </div>
          </List>
          
        );
      }

};

export default ReviewersCheckboxList