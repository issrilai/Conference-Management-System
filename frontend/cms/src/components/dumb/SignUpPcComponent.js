import React from 'react'

const SignUpPcComponent = () => (
        <div className="FormContent">
            <form className="FormFields">
                <div className="FormField">
                    <label className="FormField_Label" htmlFor="username">Affiliation</label>
                    <input id="affiliation" className="FormField_Input" placeholder="Enter your affiliation" name="affiliation"  />
                </div>

                <div className="FormField">
                    <label className="FormField_Label" htmlFor="password">Website</label>
                    <input type="website" id="website" className="FormField_Input" placeholder="Enter your website" name="website"  />
                </div>
            </form>
        </div>

);