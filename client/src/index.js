import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// import 'react-bootstrap';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
registerServiceWorker();
