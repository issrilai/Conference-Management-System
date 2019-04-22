import React from 'react';
import '../../../styles/Conference.css'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

class ConferenceToggle extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          expanded: null,
          name: props.name
        };
      }
    
      handleChange = panel => (event, expanded) => {
        this.setState({
          expanded: expanded ? panel : false,
        });
      };

      render() {
        const { expanded } = this.state;


        return <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className = "heading">{this.state.name}</Typography>
            <Typography className="secondaryHeading">I am an expansion panel</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
}

export default ConferenceToggle