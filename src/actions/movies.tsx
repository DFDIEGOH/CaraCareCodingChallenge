import axios from 'axios';
import {SEARCH_MOVIE, SELECT_MOVIE} from './types';

const path = 'http://www.omdbapi.com/?i=tt3896198&apikey=a120ef66';

export function searchMovies(searchParam) {
  return (dispatch) => {
    axios.get(path + '&s=' + searchParam).then((res) => {
      dispatch({type: SEARCH_MOVIE, payload: res.data.Search});
    });
  };
}
