// reducers.js
import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  searchHotel
} from './action';

const initialState = {
  data: [],
  loading: false,
  error: null
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        searchoption:''
      };
    case FETCH_DATA_SUCCESS:
      console.log('ac',action.payload)
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case searchHotel:

    default:
      return state;
  }
};

export default dataReducer;
