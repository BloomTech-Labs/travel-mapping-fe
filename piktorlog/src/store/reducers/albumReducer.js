import {
    CREATE_ALBUM_REQUEST, 
    CREATE_ALBUM_SUCCESS, 
    CREATE_ALBUM_FAILURE,
} from '../actions/types';

// NOTE: in the switch statement below, should I include the case
// when the type is CREATE_ALBUM_REQUEST? I noticed the analog to 
// this in the userReducer did not include a case for 
// REGISTER_REQUEST, LOGIN_REQUEST, and NOT_YET_LOGGED_IN

// const initialState = {
//     albumTitle: '', 
//     albumDescription:'', 
//     albumMetadata: [{}],
// }


export default (state = null, {type, payload}) => {
    switch(type) {
        case CREATE_ALBUM_REQUEST:
          return {
            ...state,
            error: '', 
            createAlbumRequest: true
          };
        case CREATE_ALBUM_SUCCESS:
          console.log('action.payload: ',  payload);
          return {
            ...state,
            error: '', 
            createAlbumRequest: false
          };
        case CREATE_ALBUM_FAILURE:
          console.log('action.payload: ',  payload);
          return {
            ...state,
            error:  payload, 
            createAlbumRequest: false
          };
        default:
          return state;
    } 
}
  
