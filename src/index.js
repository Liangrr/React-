import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import * as serviceWorker from './serviceWorker';
import Router from './router/index.js'

ReactDOM.render(<Router/>, document.getElementById('root'));

serviceWorker.unregister();
