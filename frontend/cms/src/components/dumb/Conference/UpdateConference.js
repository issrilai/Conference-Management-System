import React, {Component} from 'react'

class UpdateConference extends Component{

    constructor(props) {
        super(props);
    }


    render() {
        return(
            <div>{this.props.match.params.confID}</div>

        )

    }

}
export default UpdateConference