import { combineReducers, createStore } from 'redux';
import form from './form/reducer';

const store = createStore(
  combineReducers({
    form,
  })
);

export default store;
