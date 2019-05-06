import React, {Component} from 'react';

class SignUpPcComponent extends Component {
    render() {
        const {handleSubmit, handleChange, website, affiliation} = this.props;
        return (
            <React.Fragment>
                <div className="FormContent">
                    <form onSubmit={handleSubmit} className="FormFields">
                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="username">Affiliation</label>
                            <input id="affiliation" className="FormField_Input" name="affiliation" value={affiliation}
                                   onChange={handleChange}/>
                        </div>

                        <div className="FormField">
                            <label className="FormField_Label" htmlFor="password">Website</label>
                            <input type="website" id="website" className="FormField_Input" name="website"
                                   value={website} onChange={handleChange}/>
                        </div>
                    </form>
                </div>
                <div className="NextButton">
                    <button type="submit" onClick={handleSubmit} className="FormField_Link">Next</button>
                </div>
            </React.Fragment>
        );
    }
}

export default SignUpPcComponent;