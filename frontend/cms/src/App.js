import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
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

    this.logout = this.setLogout.bind(this);
  }

  handleLog()
  {
    this.setState({logged: true});
  }

  setLogout()
  {
    this.setState({logged: false});
  }

  handleLogOut()
  {
    const cookies = new Cookies();
    const logout = this.logout;

    fetch('http://127.0.0.1:8000/logout/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body:JSON.stringify({session_key: cookies.get('session_key')})
    }).then(function(response)
    {
      if(response.status === 200)
      {
        logout();
        cookies.remove('session_key');
        cookies.remove('role');
      }
      else if(response.status === 401)
      {
        response.text().then(function(data){
          alert(data);
        });
      }
      else
      {
        alert('server problem');
      }
    });
  }

  render()
  {
    return (
      <div className="App">
        <BrowserRouter>
          <div className='App'>
            <div className='Home'>
              <RoutingBasicComponent logged={this.state.logged} action={this.handleLog.bind(this)} actionLogout={this.handleLogOut.bind(this)}/>
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
