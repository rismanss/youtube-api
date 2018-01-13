import {
  FETCH_SEARCH_START,
  RECEIVE_SEARCH,
  FETCH_SEARCH_ERROR
} from '../actions/constants';

const INTIAL_STATE = {
  all: [],
  fetching: false,
  fetched: false,
  error: null
};

const videos = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_START:
      return {
        ...state,
        fetching: true
      };
    case RECEIVE_SEARCH:
      return {
        ...state,
        fetching: false,
        fetched: true,
        all: action.payload.data.items
      };
    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default videos;
