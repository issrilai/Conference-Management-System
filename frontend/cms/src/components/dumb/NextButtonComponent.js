import {Link} from "react-router-dom";
import React from 'react';


const NextButtonComponent = (link) => (
    <div className="NextButton">
        <Link to={link} className="FormField_Link">Next</Link>
    </div>
);

export default NextButtonComponent;