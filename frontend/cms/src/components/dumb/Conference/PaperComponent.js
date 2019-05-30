import React from 'react';
import '../../../styles/Conference.css'
import storeProposals from '../../smart/getProposalsComponent'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import ProposallList from './ProposalList';
import SimpleProposallList from './SimpleProposalList';
import Cookies from "universal-cookie";
import ReviewersCheckboxList from './ReviewersCheckboxList';

class PaperComponent extends React.Component{
    constructor(props) {
        super(props);
      
        this.state = {
          expanded: null,
          name: props.name,
          reviewers: props.reviewers,
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

        return <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')} style={{width: 50 + '%'}}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className = "heading">{this.state.name}</Typography>
            <Typography className="secondaryHeading"/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <ReviewersCheckboxList reviewers={this.state.reviewers} prid={this.state.id}></ReviewersCheckboxList>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
}

export default PaperComponent