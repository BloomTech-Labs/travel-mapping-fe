import {
SEARCH_START,
SEARCH_SUCCESS,
SEARCH_FAILURE

} from '../actions/types'


const initialState = {
    searchInput: '',
    albums:{},
    error:''
  }; 

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SEARCH_START:
        return {
          ...state,
          error: '',
          searchInput: true
        };
      case SEARCH_SUCCESS:
        return {
          ...state,
          searchInput: true,
          error: '',
          albums: action.payload
          
        };
        case SEARCH_FAILURE:
            return {
              ...state,
              searchInput: false,
              error: '',
              albums: action.payload
            }
              default:
                return state;
            
                }
              };
              