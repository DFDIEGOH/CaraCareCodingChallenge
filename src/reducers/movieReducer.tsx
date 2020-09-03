import {SEARCH_MOVIE, SELECT_MOVIE} from '../actions/types';

const initialState = {
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
        selected: action.payload.id,
      };

    default:
      return state;
  }
};

export default movieReducer;
