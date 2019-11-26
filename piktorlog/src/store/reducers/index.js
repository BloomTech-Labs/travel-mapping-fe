import { combineReducers } from 'redux';
// IMPORTS GO HERE
import userReducer from './userReducer';
import albumsReducer from './albumReducer';

export default combineReducers({
  // EXPORTS GO IN HERE
  currentUser: userReducer, 
  userAlbums: albumReducer
});
