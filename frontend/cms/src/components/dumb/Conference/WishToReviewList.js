import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/WishToReview.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const WishToReviewList = observer(class RadioButtonsGroup extends React.Component {
    state = {
      value: 'no',
    };
  
    handleChange = event => {
      this.setState({ value: event.target.value });
    };
  
    render() {
      const { classes } = this.props;
  
      return (
        <div className="form">
          <FormControl component="fieldset" className="formControl">
            <FormLabel component="legend">Do you want to review?</FormLabel>
            <RadioGroup
              aria-label="WishToReview"
              name="wishToReview"
              className="group"
              value={this.state.value}
              onChange={this.handleChange}
              row
            >
              <FormControlLabel className="label" value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel className="label" value="maybe" control={<Radio />} label="Maybe" />
              <FormControlLabel className="label" value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
});

export default WishToReviewList