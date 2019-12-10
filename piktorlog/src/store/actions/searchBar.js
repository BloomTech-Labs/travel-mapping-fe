import axios from 'axios'


import {
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE
  } from './types';
  
  
  export default (search) => async dispatch => {
    dispatch({ type: SEARCH_START });
    axios
      .get()
      .then(res => { 
          console.log("actions log :", res.data)
   dispatch({ type: SEARCH_SUCCESS, payload: res.data});
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: SEARCH_FAILURE, payload: err });
      });
  };