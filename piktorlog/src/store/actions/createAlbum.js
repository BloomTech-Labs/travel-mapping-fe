import axios from 'axios';



// export const createAlbumRequest = data => ({
//     type: CREATE_ALBUM_START, 
//     payload: data
// });
// export const createAlbumSuccess = data => ({
//     type: CREATE_ALBUM_SUCCESS,
//     payload: data
// })
// export const createAlbumFailure = error => ({
//     type: CREATE_ALBUM_FAILURE,
//     payload:error
// });

// export const 

export const CREATE_ALBUM_START = 'CREATE_ALBUM_START';
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const CREATE_ALBUM_FAILURE = 'CREATE_ALBUM_FAILURE';

export const createAlbumStart = (data) => dispatch => {
    dispatch({type:CREATE_ALBUM_START})
    axios   
        .post('http://localhost:4000', data)
        .then(res => {
            dispatch({type:CREATE_ALBUM_SUCCESS, payload:res.data.results})
        })
        .catch(err => {
            dispatch({type:CREATE_ALBUM_FAILURE, payload:err})
        })
};


// export const createAlbumSuccess = () => dispatch => {
//     dispatch({type:CREATE_ALBUM_SUCCESS});
// };

// export const createAlbumFailure = () => dispatch => {
//     dispatch({type:CREATE_ALBUM_FAILURE});
// };

// export function createAlbum() 