import {
    CREATE_ALBUM_REQUEST, 
    CREATE_ALBUM_SUCCESS, 
    CREATE_ALBUM_FAILURE,
} from '../actions/types';

const initialState = {
  byId: {},
  allIds: []
}; 

// NOTE: in the switch statement below, should I include the case
// when the type is CREATE_ALBUM_REQUEST? I noticed the analog to 
// this in the userReducer did not include a case for 
// REGISTER_REQUEST, LOGIN_REQUEST, and NOT_YET_LOGGED_IN

// NOTE: not sure how to go about handling errors here in the reducer. 
// Should we do something like having an error field in the albums
// reducer that gets cleared or populated for actions successes or
// failures, respectively?
export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ALBUM_REQUEST:
          return {
            ...state,
          };
        case CREATE_ALBUM_SUCCESS:
          return {
            ...state,
            byId: {
              ...state.byId, 
              [action.payload.album_id]:action.payload
            }, 
            allIds: [...state.allIds, action.payload.album_id]
          };
        case CREATE_ALBUM_FAILURE:
          return {
            ...state,
          };
        default:
          return state;
    } 
}