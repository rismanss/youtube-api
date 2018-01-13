import axios from 'axios';
import { connect } from 'react-redux';
import {
  FETCH_SEARCH_START,
  RECEIVE_SEARCH,
  FETCH_SEARCH_ERROR
} from './constants';

const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCTimcgQteEelP4Zjs-p33saOIkmZkIns0';

export const fetchTube = term => {
  const params = {
    part: 'snippet',
    key: API_KEY,
    q: term,
    type: 'video'
  };

  const request = axios.get(ROOT_URL, { params });

  return function(dispatch) {
    dispatch({
      type: FETCH_SEARCH_START
    });

    return request
      .then(response => {
        dispatch({
          type: RECEIVE_SEARCH,
          payload: response
        });
        console.log(response.data.items);
      })
      .catch(err => {
        dispatch({
          type: FETCH_SEARCH_ERROR,
          payload: err
        });
      });
  };
};
