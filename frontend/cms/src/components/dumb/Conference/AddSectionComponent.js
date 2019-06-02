import React, {Component} from 'react'
import '../../../styles/AddSection.css'
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {extendObservable} from "mobx";
import {observer} from "mobx-react";
import Cookies from 'universal-cookie';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#725AC1",
        },
        secondary: {
            main: '#8D86C9',
        },
        inherit: {
            main: '#AA9FCE',
        },
    },
});
const AddSectionComponent =  observer (
class AddSectionComponent extends  Component {

    constructor(props) {
        super(props);

        extendObservable(this, {
            name:'',
            startHour:'',
            endHour:'',
            chairId:'',
            confId:'',
        });

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange = e => {
        const {name, value} = e.target;
        this[name] = value;
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.props.onSubmit) {
            this.props.onSubmit()
        }
        const cookies = new Cookies();

        console.log('The form was submitted with the following data:');
        console.log(this.props);
        const {username, password} = this;
        fetch('http://127.0.0.1:8000/add-section/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({
                name: this.name,
                startHour: this.startHour,
                endHour: this.endHour,
                confId: this.props.confId,
                session_key: cookies.get('session_key'),
            })

        }).then(function(response) {
            if(response.status === 200)
              alert("ok");
            else
              response.text().then(function(data){
                alert(data);
              })
          })
    };

    render() {
        const {name, startHour, endHour, chairId, confId} = this;
        console.log(this.props);
        return(
            <MuiThemeProvider theme={theme}>
                <form onSubmit={this.handleSubmit} className="root">
                    <div className="inputField">
                        <TextField
                            required
                            label="Name"
                            className='textField'
                            name="name"
                            value={name}
                            onChange={this.handleChange}
                            margin="normal"
                            variant={"outlined"}
                        />
                    </div>
                    <div className="inputField">
                        <TextField
                            required
                            label="Start Hour"
                            className='textField'
                            name="startHour"
                            value={startHour}
                            onChange={this.handleChange}
                            margin="normal"
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </div>
                    <div className="inputField">
                        <TextField
                            required
                            label="End Hour"
                            name="endHour"
                            value={endHour}
                            onChange={this.handleChange}
                            className="textField"
                            margin="normal"
                            type="time"
                            defaultValue="07:30"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min
                            }}
                        />
                    </div>

                    <div>
                        <input type="submit" className="FormField_Link"/>
                    </div>
                </form>
            </MuiThemeProvider>
        );
    }
})

export default AddSectionComponent
