import ls from 'local-storage';

import {
    CREATE_ALBUM_REQUEST,
    CREATE_ALBUM_SUCCESS,
    CREATE_ALBUM_FAILURE, 

    GET_ALBUMS_REQUEST,
    GET_ALBUMS_SUCCESS,
    GET_ALBUMS_FAILURE,

    EDIT_ALBUM_REQUEST,
    EDIT_ALBUM_SUCCESS,
    EDIT_ALBUM_FAILURE,

    DELETE_ALBUM_REQUEST,
    DELETE_ALBUM_SUCCESS,
    DELETE_ALBUM_FAILURE
} from './types';

import { createAlbumReq, getUserAlbumsReq, editAlbumReq, deleteAlbumReq } from '../requests/albums';


export const createAlbum = (user_id, title, description, access = 'public') => async dispatch => {
    dispatch({type:CREATE_ALBUM_REQUEST});

    try {
        const newlyCreatedAlbum = await createAlbumReq(user_id, title, description, access = 'public');
        ls.set('newlyCreatedAlbum', newlyCreatedAlbum);
        dispatch({ type: CREATE_ALBUM_SUCCESS, payload: newlyCreatedAlbum});
    } catch (err) {
        dispatch({ type: CREATE_ALBUM_FAILURE, payload: err });
        console.error(err);
    }
}

export const getUserAlbums = (user_id) => async dispatch => {
    dispatch({type:GET_ALBUMS_REQUEST});

    try {
        const userAlbums = await getUserAlbumsReq(user_id);
        ls.set('userAlbums', userAlbums);
        dispatch({type:GET_ALBUMS_SUCCESS, payload:userAlbums});
    } catch(err) {
        dispatch({ type: GET_ALBUMS_FAILURE, payload: err });
        console.error(err);
    }
}

export const editAlbum = (album_id, changes) => async dispatch => {
    dispatch({type:EDIT_ALBUM_REQUEST});

    try {
        const newlyUpdatedAlbumData = await editAlbumReq(album_id);
        dispatch({type:EDIT_ALBUM_SUCCESS, payload: newlyUpdatedAlbumData});
    } catch(err) {
        dispatch({ type: GET_ALBUMS_FAILURE, payload: err });
        console.error(err);
    }
}

export const deleteAlbum = (album_id) => async dispatch => {
    dispatch({type:DELETE_ALBUM_REQUEST});

    try {
        const deletedAlbumId = await deleteAlbumReq(album_id);
        dispatch({type:DELETE_ALBUM_SUCCESS, payload: deletedAlbumId});
    } catch(err) {
        dispatch({ type: GET_ALBUMS_FAILURE, payload: err });
        console.error(err);
    }
}