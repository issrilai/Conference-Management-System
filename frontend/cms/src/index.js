import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DummyList from "./DummyList"
import Authentication from "./components/dumb/Authentication/Authentification";
import ConferenceList from './components/dumb/Conference/ConferenceList';
import storeConferences from './components/smart/getConferenceComponent'



//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Authentication/>, document.getElementById('root'));
ReactDOM.render(<ConferenceList store={storeConferences}/>, document.getElementById('root'));

import RoutingBasicComponent from "./RoutingComponent";
//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(<RoutingBasicComponent/>, document.getElementById('root'));

serviceWorker.unregister();
