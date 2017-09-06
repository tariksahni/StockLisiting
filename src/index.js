import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import data from './data.js';


ReactDOM.render(<App stocks= {data} />, document.getElementById('root'));
registerServiceWorker();
