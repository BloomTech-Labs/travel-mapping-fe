import { combineReducers } from 'redux';
// IMPORTS GO HERE
import userReducer from './userReducer';

export default combineReducers({
  // EXPORTS GO IN HERE
  currentUser: userReducer
});
