import {
    CREATE_ALBUM_REQUEST, 
    CREATE_ALBUM_SUCCESS, 
    CREATE_ALBUM_FAILURE,
} from '../actions/types';

// // What should our state look like here? Let me take a stab at it. 
// // (important reference: https://redux.js.org/recipes/structuring-reducers/normalizing-state-shape)
// const initialState = {
//   currentUser: {}, 
//   entities: {
//     userAlbums: {
//       byId: {
//         albumId1: {
//           id: albumdId1,
//           user_id: action.payload.user_id,
//           title: action.payload.title,
//           description: action.payload.description, 
//           access: action.payload.access, 
//           created_at: action.payload.created_at,
//           updated_at: action.payload.updated_at, 
//           meta: {}
//         },
//         albumId2: {
//           id: albumdId2,
//           user_id: action.payload.user_id,
//           title: action.payload.title,
//           description: action.payload.description, 
//           access: action.payload.access, 
//           created_at: action.payload.created_at,
//           updated_at: action.payload.updated_at, 
//           meta: {}
//         }
//       },
//       allIds: [albumId1, albumId2]
//     },
//     userMedia: {
//       byId: {
//         mediaId1: {
//           id: mediaId1,
//           user_id: val, 
//           title: val, 
//           caption:val, 
//           type: val, 
//           media_url: val, 
//           created_at: val,
//           updated_at: val, 
//         }, 
//         mediaId2: {
//           id: mediaId2,
//           user_id: val, 
//           title: val, 
//           caption:val, 
//           type: val, 
//           media_url: val, 
//           created_at: val,
//           updated_at: val, 
//         }
//       }, 
//       allIds: [mediaId1, mediaId2]
//     },
//     mediaAlbums: {
//       byId: {
//         1: {
//           id:1, 
//           albumId: albumIdVal, 
//           mediaId: mediaIdVal
//         }, 
//         2: {
//           id:2, 
//           albumId: albumIdVal, 
//           mediaId: mediaIdVal 
//         }, 
//         3: {
//           id:3, 
//           albumId:albumId1, 
//           mediaId:mediaId1
//         }, 
//         4: {
//           id:4, 
//           albumId:albumId1, 
//           mediaId:mediaId2
//         }, 
//         5: {
//           id:5, 
//           albumId: albumId2, 
//           mediaId: mediaId2
//         },
//         6: {
//           id:6, 
//           albumId: albumId2, 
//           mediaId: mediaId2
//         }
//       }
//     }
//   }
// }

// ok cool. I have an idea of what the state will look like. 
const initialState = {
  currentUser: {}, 
  entities: {
    userAlbums: {
      byId: {}, 
      allIds: []
    }, 
    userMedia: {
      byId: {}, 
      allIds: []
    },
    mediaAlbums: {
      byId: {}, 
      allIds: []
    }
  }
} 

// NOTE: in the switch statement below, should I include the case
// when the type is CREATE_ALBUM_REQUEST? I noticed the analog to 
// this in the userReducer did not include a case for 
// REGISTER_REQUEST, LOGIN_REQUEST, and NOT_YET_LOGGED_IN

// NOTE: not sure how to go about handling errors here in the reducer. 
export default (state = initialState, action) => {
    switch(action.type) {
        case CREATE_ALBUM_REQUEST:
          return {
            ...state,
          };
        case CREATE_ALBUM_SUCCESS:
          console.log('currentState: ', state);
          const newState = {...state};
          newState.entities.userAlbums.byId[action.payload.album_id] = action.payload;
          newState.entities.userAlbums.allIds.push(action.payload.album_id);
          console.log('updatedState: ', newState);
          return {
            ...newState
          };
        case CREATE_ALBUM_FAILURE:
          return {
            ...state,
          };
        default:
          return state;
    } 
}