import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import DummyList from "./DummyList"
import Authentication from "./components/dumb/Authentication/Authentification";
import ConferenceList from './components/dumb/Conference/ConferenceList';
import storeConferences from './components/smart/getConferenceComponent'
import AddConference from "./components/dumb/Conference/AddConference";
import WishToReviewList from "./components/dumb/Conference/WishToReviewList";


ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(<WishToReviewList/>, document.getElementById('root'));
// ReactDOM.render(<AddConference/>, document.getElementById('root'));


serviceWorker.unregister();
