import React, {Component} from 'react';


class SignUpAuthorComponent extends Component {
    render() {
        const {handleSubmit, affiliation, handleChange} = this.props;
        return (
            <React.Fragment>
                <div className="FormContent">
                    <form onSubmit={handleSubmit} className="FormFields">
                        <div className="FormField_Author">
                            <label className="FormField_Label" htmlFor="username">Affiliation</label>
                            <input required id="affiliation" className="FormField_Input" name="affiliation" value={affiliation}
                                   onChange={handleChange}/>
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

export default SignUpAuthorComponent;