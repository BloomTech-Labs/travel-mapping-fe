// import axios from 'axios';
import ls from 'local-storage';

import {
    CREATE_ALBUM_REQUEST,
    CREATE_ALBUM_SUCCESS,
    CREATE_ALBUM_FAILURE
} from './types';

import { createAlbum } from '../requests/albums';

export default (user_id, title, description, access = 'public') => async dispatch => {
    dispatch({type:CREATE_ALBUM_REQUEST});

    try {
        const newlyCreatedAlbum = await createAlbum(user_id, title, description, access = 'public');
        ls.set('newlyCreatedAlbum', newlyCreatedAlbum);
        dispatch({ type: CREATE_ALBUM_SUCCESS, payload: newlyCreatedAlbum});
    } catch (err) {
        dispatch({ type: CREATE_ALBUM_FAILURE, payload: err });
        console.error(err);
    }
};