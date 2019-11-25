import { combineReducers } from 'redux';
// IMPORTS GO HERE
import userReducer from './userReducer';
import albumReducer from './albumReducer';

export default combineReducers({
  // EXPORTS GO IN HERE
  currentUser: userReducer, 
  userAlbums: albumReducer
});
