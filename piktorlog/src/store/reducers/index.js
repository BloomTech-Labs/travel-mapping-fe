import { combineReducers } from 'redux';
// IMPORTS GO HERE
import {
  CREATE_ALBUM_START, 
  CREATE_ALBUM_SUCCESS, 
  CREATE_ALBUM_FAILURE
} from '../actions/createAlbum';

const initialState = {
  albumTitle: '', 
  albumDescription:'', 
  albumMetadata: [{}],
}

const reducer = (state = initialState, action) => {
  console.log('reducer: ', action);
  switch(action.type) {
    case CREATE_ALBUM_START:
      return {
        ...state,
        error: '', 
        createAlbumStart: true
      };
    case CREATE_ALBUM_SUCCESS:
      console.log('action.payload: ', action.payload);
      return {
        ...state,
        error: '', 
        createAlbumStart: false
      };
    case CREATE_ALBUM_FAILURE:
      console.log('action.payload: ', action.payload);
      return {
        ...state,
        error: action.payload, 
        createAlbumStart: false
      };
    default:
      return state;
  }
}



export default combineReducers({
  // EXPORTS GO IN HERE
  reducer
});
