/* eslint-disable prettier/prettier */
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, combineReducers} from 'redux';

import movieReducer from '../reducers/movieReducer';

const appReducers = combineReducers({
  movieReducer: movieReducer,
});

const configureStore = () => createStore(appReducers, applyMiddleware(thunk));

export default configureStore;
