import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DummyList from "./DummyList"
import Authentication from "./components/dumb/Authentication/Authentification";
import ConferenceList from './components/dumb/Conference/ConferenceList';
import storeConferences from './components/smart/getConferenceComponent'

<<<<<<< Updated upstream


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Authentication/>, document.getElementById('root'));
// ReactDOM.render(<ConferenceList store={storeConferences}/>, document.getElementById('root'));

import RoutingBasicComponent from "./RoutingComponent";
import AuthorProposalComponent from "./components/dumb/AuthorProposalComponent";
import SignUpPcComponent from "./components/dumb/Authentication/SignUpPcComponent";
import Authentification from "./components/dumb/Authentication/Authentification";
import AddConference from "./components/dumb/Conference/AddConference";
//ReactDOM.render(<App />, document.getElementById('root'));
=======
ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SignInComponent store={UserStore}/>, document.getElementById('root'));
//ReactDOM.render(<Authentication/>, document.getElementById('root'));
>>>>>>> Stashed changes

ReactDOM.render(<AddConference/>, document.getElementById('root'));

serviceWorker.unregister();
