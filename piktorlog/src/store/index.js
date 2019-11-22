import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { middlewareOne, middlewareTwo } from './middleware';
import rootReducer from './reducers';

// Allows the redux devtools in the browser to read the state. Don't worry about it.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = applyMiddleware(
  thunk,
  // middlewareOne,
  // middlewareTwo,
  logger,
);

export const store = createStore(
  rootReducer,
  composeEnhancers(middlewares)
);
