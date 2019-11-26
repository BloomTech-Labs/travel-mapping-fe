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


// the payload for the CREATE_ALBUM_SUCCESS action type is of the following form:
// {
//     "album_id": 0,
//     "user_id": 6534,
//     "title": "Vacation Photos",
//     "description": "Awesome fun vacation time in the Mexico with all the friends",
//     "access": "public",
//     "created_at": "2019-11-17 03:02:35",
//     "updated_at": "2019-11-17 03:02:35",
//     "meta": {}
// }


export default (state = {}, action) => {
    switch(action.type) {
        // // leaving out the case commented out below for now

        // case CREATE_ALBUM_REQUEST:
        //   return {
        //     ...state,
        //     error: '', 
        //     createAlbumRequest: true
        //   };

        case CREATE_ALBUM_SUCCESS:
          console.log('action.payload: ',  action.payload);
        // the payload for the CREATE_ALBUM_SUCCESS action type is of the following form:
        // {
        //     "album_id": 0,
        //     "user_id": 6534,
        //     "title": "Vacation Photos",
        //     "description": "Awesome fun vacation time in the Mexico with all the friends",
        //     "access": "public",
        //     "created_at": "2019-11-17 03:02:35",
        //     "updated_at": "2019-11-17 03:02:35",
        //     "meta": {}
        // }
          return {
            ...state,
            // 

          };
        case CREATE_ALBUM_FAILURE:
          console.log('action.payload: ',  action.payload);
          return {
            ...state,
          };
        default:
          return state;
    } 
}
  
