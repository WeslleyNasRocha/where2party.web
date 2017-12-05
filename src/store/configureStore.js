import { createStore, combineReducers } from 'redux';
import eventReducer from '../reducers/events';

export default () => {
  const store = createStore(
    combineReducers({
      events: eventReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
