import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Authentication from "./components/dumb/Authentication/Authentification";
import UserStore from "./stores/UserStore";
import SignInComponent from "./components/dumb/Authentication/SignInComponent";

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SignInComponent store={UserStore}/>, document.getElementById('root'));
//ReactDOM.render(<Authentication/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
