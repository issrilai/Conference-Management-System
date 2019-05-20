import React from 'react';
import '../../../styles/Conference.css'
import SessionList from './SessionsList'
import storeProposals from '../../smart/getProposalsComponent'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ProposallList from './ProposalList';

class SectionToggle extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          expanded: null,
          name: props.name,
          id: props.id
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
            <Typography className="secondaryHeading"></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ProposallList store={storeProposals} id={this.state.id}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
}

export default SectionToggle