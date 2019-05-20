import React, {Component} from 'react';

class SignUpPcComponent extends Component {

    checkChair = function() {
        if (document.getElementById('chair').checked === true) {
            document.getElementById('reviewer').checked = false;
        }
    };

    checkReviewer = function() {
        if (document.getElementById('reviewer').checked === true) {
            document.getElementById('chair').checked = false;
        }
    };

    render(){
        const {handleSubmit, handleChange, website, affiliation, chair, reviewer} = this.props;
        return (
            <React.Fragment>
                <div className="FormContent">
                    <form onSubmit={handleSubmit} className="FormFields">
                        <div className="PCFormField">
                            <label className="FormField_Label" htmlFor="username">Affiliation</label>
                            <input required id="affiliation" className="FormField_Input" name="affiliation" value={affiliation}
                                   onChange={handleChange}/>
                        </div>

                        <div className="PCFormField">
                            <label className="FormField_Label" htmlFor="password">Website</label>
                            <input required type="website" id="website" className="FormField_Input" name="website"
                                   value={website} onChange={handleChange}/>
                        </div>

                        <div className="PCRow">
                            <label className="PCFirst_Field FormField_Label"> Chair
                                <input required type="checkbox" id="chair" className="FormField_Input" name="chair"
                                       value={chair} onChange={handleChange} onClick={this.checkChair}/>
                            </label>
                            <label className="PCSecond_Field FormField_Label"> Reviewer
                                <input required type="checkbox" id="reviewer" className="FormField_Input" name="reviewer"
                                       value={reviewer} onChange={handleChange} onClick={this.checkReviewer}/>
                            </label>
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