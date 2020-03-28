import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App2 from './App2';
import Hooks_useEffect from './Hooks_useEffect'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Hooks_useEffect />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
