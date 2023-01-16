import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import './normalize.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
