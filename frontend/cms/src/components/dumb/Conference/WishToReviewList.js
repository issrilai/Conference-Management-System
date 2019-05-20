import React from 'react';
import { observer } from "mobx-react"
// import '../../../styles/wishToReview.css'
import FormControl from "@material-ui/core/es/FormControl/FormControl";
import FormLabel from "@material-ui/core/es/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/es/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/es/Radio/Radio";

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
            <FormLabel component="legend"/>
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
  
// RadioButtons.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

export default WishToReviewList