import React, { Component } from 'react';
import './App.css';
import Home from "./components/dumb/HomeComponent";
import { HashRouter as Router, Route, Link, NavLink, Switch } from 'react-router-dom';
import Authentification from "./components/dumb/Authentication/Authentification";
import Cookies from "universal-cookie/es6/Cookies";
//import {Cookies} from 'react-cookie';

class App extends Component {

  constructor(props)
  {
    super(props);

    //this.handleLog = this.handleLog.bind(this);

    const cookies = new Cookies();
    this.state = {
      logged: (cookies.get('session_key') !== undefined),
    };
  }

  handleLog()
  {
    this.setState({logged: true});
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className='App'>
            <div className='Home'>
              {!this.state.logged ? <Authentification action={this.handleLog.bind(this)}/> : ''}
              {this.state.logged ? <Home/> : ''}
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
