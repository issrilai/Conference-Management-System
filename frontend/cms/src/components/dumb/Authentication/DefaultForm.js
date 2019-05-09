import React from 'react';


class DefaultForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {loadPCMemberForm, loadAuthorForm, firstname, lastname, handleSubmit, handleChange, email, username, password, confirmpass, listener, author, pc} = this.props;

        return (
            <React.Fragment>
                <form className="SignUpFields">
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="firstname">First Name</label>
                            <input type="text" id="firstname" className="First_Input" name="firstname" value={firstname}
                                   onChange={handleChange}/>
                        </div>

                        <div className="Second_Field">
                            <label className="Second_Label" htmlFor="lastname">Last Name</label>
                            <input type="text" id="lastname" className="First_Input" name="lastname" value={lastname}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="username">Username</label>
                            <input type="text" id="username" className="First_Input" name="username" value={username}
                                   onChange={handleChange}/>
                        </div>
                        <div className="Second_Field">
                            <label className="Second_Label" htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="First_Input" name="email" value={email}
                                   onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="FRow">
                        <div className="First_Field">
                            <label className="First_Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="First_Input" name="password"
                                   value={password} onChange={handleChange}/>
                        </div>
                        <div className="Second_Field">
                            <label className="Second_Label" htmlFor="confirmpass">Confirm Password</label>
                            <input type="password" id="confirmpass" className="First_Input" name="confirmpass"
                                   value={confirmpass} onChange={handleChange}/>
                        </div>
                    </div>
                </form>
                <div className="FRow">
                    <label className="First_Field">
                    <div className="NextButton">
                        <button onClick={loadAuthorForm} className="FormField_Link">author</button>
                    </div>
                    </label>
                    <label className="First_Field">
                        <div className="NextButton">
                            <button onClick={loadAuthorForm} className="FormField_Link">pc member</button>
                        </div>
                    </label>
                </div>
                <div className="NextButton">
                    <button className="FormField_Link" onClick={handleSubmit}>listener</button>
                </div>

            </React.Fragment>
        );
    }
}

export default DefaultForm;