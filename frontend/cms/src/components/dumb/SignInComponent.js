import React from 'react'

const SignInComponent = () => (
            <div className="FormContent">
                <form  className="FormFields">
                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="username">Username</label>
                        <input id="username" className="FormField_Input" placeholder="Enter your username" name="username" />
                    </div>

                    <div className="FormField">
                        <label className="FormField_Label" htmlFor="password">Password</label>
                        <input type="password" id="password" className="FormField_Input" placeholder="Enter your password" name="password" />
                    </div>
                </form>
            </div>

        );
export default SignInComponent;