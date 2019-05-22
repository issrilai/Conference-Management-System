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

      show(){
        const cookies = new Cookies();
        if(cookies.get('role') === "reviewer")
        {
          return <ProposallList store={storeProposals} id={this.state.id}/>
        }
        else
        if(cookies.get('role') === "chair")
        {
          return <SimpleProposallList store={storeProposals} id={this.state.id}/>
        }
      }

      render() {
        const { expanded } = this.state;

        return <ExpansionPanel expanded={expanded === 'panel1'} onChange={this.handleChange('panel1')}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className = "heading">{this.state.name}</Typography>
            <Typography className="secondaryHeading"/>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {this.show()}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      }
}

export default SectionToggle