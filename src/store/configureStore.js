import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import eventReducer from '../reducers/events';
import filterReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      events: eventReducer,
      filters: filterReducer,
    }),
    composeEnhancers(applyMiddleware(thunk)),
  );
  return store;
};
