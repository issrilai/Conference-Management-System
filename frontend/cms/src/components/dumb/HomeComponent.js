import React, { Component } from 'react';
import Router from "react-router-dom/es/Router";
import {observer} from "mobx-react";

export default observer
(
class Home extends Component
{
    //logout - delete cookie, set state, delete backend session

    render()
    {
        return (
            <div className="Home">
                Hello
            </div>
        );
    }

}
)