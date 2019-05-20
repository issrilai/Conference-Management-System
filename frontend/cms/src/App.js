import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router} from 'react-router-dom';
import Cookies from "universal-cookie/es6/Cookies";
import RoutingBasicComponent from "./RoutingComponent";

class App extends Component {

  constructor(props)
  {
    super(props);

    const cookies = new Cookies();
    this.state = {
      logged: (cookies.get('session_key') !== undefined),
    };
  }

  handleLog()
  {
    this.setState({logged: true});
  }

  render()
  {
    return (
      <div className="App">
        <Router>
          <div className='App'>
            <div className='Home'>
              <RoutingBasicComponent logged={this.state.logged} action={this.handleLog.bind(this)}/>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
