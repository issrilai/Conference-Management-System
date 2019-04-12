import {NavLink} from 'react-router-dom';
import React from 'react';


const SignUpComponent = () => (
                <div className="FormContent">
                    <form className="SignUpFields">
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="firstname">First Name</label>
                                <input type="text" id="firstname" className="First_Input" name="firstname" />
                            </div>

                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="lastname">Last Name</label>
                                <input type="text" id="lastname" className="First_Input"  name="lastname"  />
                            </div>
                        </div>
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="username">Username</label>
                                <input type="text" id="username" className="First_Input"  name="username"  />
                            </div>
                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="email">Email Address</label>
                                <input type="email" id="email" className="First_Input"  name="email"  />
                            </div>
                        </div>
                        <div className="FRow">
                            <div className="First_Field">
                                <label className="First_Label" htmlFor="password">Password</label>
                                <input type="password" id="password" className="First_Input"  name="password" />
                            </div>
                            <div className="Second_Field">
                                <label className="Second_Label" htmlFor="confirmpass">Confirm Password</label>
                                <input type="confirmpass" id="confirmpass" className="First_Input"  name="confirmpass"  />
                            </div>
                        </div>
                        <div className="FRow">
                            <label className="First_Field">
                                <NavLink to="/sign-up-author" className="Forward">I'm an author</NavLink>
                            </label>
                            <label className="First_Field">
                                <NavLink to="/sign-up-pc" className="Forward2">I'm a PC member</NavLink>
                            </label>
                        </div>
                    </form>
                </div>
        );

export default SignUpComponent;