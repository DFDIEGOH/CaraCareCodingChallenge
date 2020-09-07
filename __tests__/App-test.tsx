/**
 * @format
 */

import 'react-native';
import axios from 'axios';

import * as actions from '../src/actions/movies';
import * as types from '../src/actions/types';

import reducer from '../src/reducers/movieReducer';
import {initialState} from '../src/reducers/movieReducer';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const pathApi = 'http://www.omdbapi.com/?i=tt3896198&apikey=a120ef66';

describe('API calls', () => {
  it('Api Call - Contains Elements', () => {
    axios.get(pathApi).then((res) => {
      let results = res.data;
      expect(results).toContain(results.Title);
    });
  });

  it('Api Call by Title', () => {
    axios.get(pathApi + '&t=Cars').then((res) => {
      let results = res.data;
      expect(results.Title).toBe('Cars');
    });
  });
});

describe('Reducers', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, {})).toMatchSnapshot();
  });

  it('Should handle SEARCH_MOVIE', () => {
    expect(
      reducer(initialState, {
        type: 'SEARCH_MOVIE',
      }),
    ).toMatchSnapshot();
  });
});
