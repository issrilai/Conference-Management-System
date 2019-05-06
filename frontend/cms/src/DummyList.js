import { observer } from "mobx-react"
import React, { Component } from 'react';
// import HeaderComponent from "./components/dumb/HeaderComponent";

const DummyList = observer(class DummyList extends Component{
    constructor(props) {
        super(props);
    }



    render(){
        const {user, users} = this.props.store;
        const btns = ["btn1", "btn2"];
        const listOfUsers = users.map(user => (
            <li>{user}</li>
        ));
        console.log(user);
        return <div>
            <ul>
                <h1>Users</h1>
                <br/>
                Give id of user:<input className="id" type="number" onChange={event => {
                    const id = parseInt(event.target.value);
                    if (!isNaN(id)){
                        this.props.store.loadUser(id);
                    }
                }}/>
                {listOfUsers}
                Current User<li>{this.props.store.user.email}</li>
            </ul>
        </div>
    }
});

export default DummyList