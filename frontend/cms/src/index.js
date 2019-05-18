import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import RoutingBasicComponent from "./RoutingComponent";
import AuthorProposalComponent from "./components/dumb/AuthorProposalComponent";
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<AuthorProposalComponent/>, document.getElementById('root'));

serviceWorker.unregister();
