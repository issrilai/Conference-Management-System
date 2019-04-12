import {Link, NavLink} from 'react-router-dom';
import React from 'react'
import '../../Authentication.css';

const AuthentificationComponent = () => (
                    <div className="CenterBox">
                        <div className="FormTitle">
                            <NavLink to="/sign-in" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign In</NavLink>
                            or
                            <NavLink to="/sign-up" activeClassName="FormTitle_Active" className="FormTitle_Link">Sign Up</NavLink>
                        </div>

                        <div className="FormField">
                            <Link to="/sign-in" className="FormField_Link">Next</Link>
                        </div>

                    </div>
        );
export default AuthentificationComponent;