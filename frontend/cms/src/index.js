import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RoutingBasicComponent from "./RoutingComponent";
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<RoutingBasicComponent/>, document.getElementById('root'));

serviceWorker.unregister();
