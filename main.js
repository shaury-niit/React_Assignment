import React from 'react';
import ReactDOM from 'react-dom' ;
import App from './App.jsx';
import Employee from './MyComponentTwo.jsx';
import MyStateComponent from './MyStateFullComponent.jsx';
import MyForm from './ReactFormComponent.jsx';
import FetchDemo from './ReactFetch.jsx';
import FlightSearch from './flightSearch.jsx';

//define the emp object here
let emp={name:'Ram', city:'Dubai'}

// ReactDOM.render(<App username="Shaury" sessionUser="Saxena"/>, document.getElementById('app'));

// ReactDOM.render(<Employee emp={emp}/>, document.getElementById('shareData'));

// ReactDOM.render(<MyStateComponent/>, document.getElementById('state'));

// ReactDOM.render(<MyForm/>, document.getElementById('form'));

// ReactDOM.render(<FetchDemo subreddit="users"/>, document.getElementById('fetch'));

ReactDOM.render(<FlightSearch />, document.getElementById('flightSearch'));

