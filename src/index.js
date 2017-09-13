import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import data from './data.js';
import { applyMiddleware , createStore } from 'redux';
import logger from 'redux-logger'
import { Provider } from 'react-redux'
import reducer from './reducers/index.js'

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker();
