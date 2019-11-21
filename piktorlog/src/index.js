import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom'
import * as Sentry from '@sentry/browser';

import { store } from './store';
import App from './App';

import './index.css';
import 'semantic-ui-css/semantic.min.css';

// Initialize Sentry.io for exception monitoring.
Sentry.init({ dsn: 'https://2ec319603fba4c4aa4d8bc7f56b40e33@sentry.io/1811913' });

const environment = process.env.NODE_ENV || 'development';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
      {/* Used to verify Sentry integration (development only) */
        environment === 'development' && (
          <button onClick={() => { throw new Error('Verify Sentry') }}>
            Break the world
          </button>
        )
      }
    </Router>
  </Provider>,
  document.getElementById('root'),
);
