/* eslint-disable prettier/prettier */
import {SEARCH_MOVIE, SELECT_MOVIE} from '../actions/types';

const initialState = {
  search: 'Search...(state)',
  results: [],
  selected: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        results: action.payload,
      };
    case SELECT_MOVIE:
      return {
        ...state,
        selected: action.payload,
      };

    default:
      return state;
  }
};

export default movieReducer;
