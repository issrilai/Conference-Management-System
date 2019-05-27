import React from 'react';
import { observer } from "mobx-react"
import '../../../styles/WishToReview.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import '../../../styles/WishToReview.css'
import {extendObservable} from "mobx";
import Cookies from 'universal-cookie';

const WishToReviewList = observer(class RadioButtonsGroup extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        value: 'no',
      };

      extendObservable(this, {
        proposal: props.id,
        reviewer: null,
      });

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = event => {
      this.setState({ value: event.target.value });
      console.log(this.state.value);
    };

    handleSubmit = e => {
      e.preventDefault();

      const cookies = new Cookies();

      fetch('http://127.0.0.1:8000/wishtoreview/', {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: JSON.stringify({
                  value: this.state.value,
                  proposal: this.proposal,
                  session_key: cookies.get('session_key'),
              })
      })

      .then(function(response) {
        if(response.status === 200)
          alert("ok");
        else
          response.text().then(function(data){
            alert(data);
          })
      })
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
          <div className="NextButton">
              <button type="submit" className="FormField_Link" onClick={this.handleSubmit}>Submit</button>
          </div>
        </div>
      );
    }
});

export default WishToReviewList