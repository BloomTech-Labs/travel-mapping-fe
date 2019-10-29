import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
// import { middlewareOne, middlewareTwo } from './middleware';
import rootReducer from './reducers';

export const store = createStore(
  rootReducer,
  applyMiddleware(
    thunk,
    // middlewareOne,
    // middlewareTwo,
    logger,
  ),
);
