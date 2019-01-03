import './css/tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import App from './Routes';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
