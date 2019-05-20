import React from 'react';


class DefaultForm extends React.Component {
    constructor(props) {
        super(props);
    }

    check = function() {
        var buttons = document.getElementsByClassName("submit");
        var i;
        for (i = 0; i < buttons.length; i++) {
            buttons[i].disabled = document.getElementById('confirmpass').value !== document.getElementById('password').value;
        }

        if (document.getElementById('confirmpass').value !== document.getElementById('password').value) {
            document.getElementById('confirmpassLabel').style.color = 'red';
            document.getElementById('confirmpassLabel').innerHTML = 'Not matching!';
        }
        else
        {
            document.getElementById('confirmpassLabel').style.color = 'green';
            document.getElementById('confirmpassLabel').innerHTML = 'Matching!';
        }

    };

    render() {
        const {loadPCMemberForm, loadAuthorForm, firstname, lastname, handleSubmit, handleChange, email, username, password, confirmpass, listener, author, pc} = this.props;

        return (
            <React.Fragment>
                <form className="SignUpFields">
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="firstname">First Name</label>
                            <input required type="text" id="firstname" className="First_Input" name="firstname" value={firstname}
                                   onChange={handleChange}/>
                        </div>

                        <div className="Second_Field">
                            <label className="Second_Label" htmlFor="lastname">Last Name</label>
                            <input required type="text" id="lastname" className="First_Input" name="lastname" value={lastname}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="username">Username</label>
                            <input required type="text" id="username" className="First_Input" name="username" value={username}
                                   onChange={handleChange}/>
                        </div>
                        <div className="Second_Field">
                            <label className="Second_Label" htmlFor="email">Email Address</label>
                            <input required type="email" id="email" className="First_Input" name="email" value={email}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="password">Password</label>
                            <input required type="password" id="password" className="First_Input" name="password"
                                   value={password}  onChange={handleChange}/>
                        </div>
                        <div className="Second_Field">
                            <label className="Second_Label" id = "confirmpassLabel" htmlFor="confirmpass">Confirm Password</label>
                            <input required type="password" id="confirmpass" className="First_Input" name="confirmpass"
                                   value={confirmpass}  onChange={handleChange} onKeyUp={this.check}/>
                            <span id="message"> </span>
                        </div>
                    </div>
                </form>
                <div className="FRow">
                    <label className="First_Field">
                    <div className="NextButton">
                        <button onClick={loadAuthorForm} className="FormField_Link AuthorButton submit">Author</button>
                    </div>
                    </label>
                    <label className="First_Field">
                        <div className="NextButton">
                            <button onClick={loadPCMemberForm} className="FormField_Link PcButton submit">Pc member</button>
                        </div>
                    </label>
                </div>
                <div className="NextButton">
                    <button className="FormField_Link submit"  onClick={handleSubmit}>Listener</button>
                </div>

            </React.Fragment>
        );
    }
}

export default DefaultForm;