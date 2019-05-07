import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/wishToReview.css'

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
        <div className="root">
          <FormControl component="fieldset" className="formControl">
            <FormLabel component="legend"></FormLabel>
            <RadioGroup
              aria-label="Do you want to review?"
              name="wishToReview"
              className="group"
              value={this.state.value}
              onChange={this.handleChange}
            >
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="maybe" control={<Radio />} label="Maybe" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </div>
      );
    }
});
  
RadioButtons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default WishToReviewList