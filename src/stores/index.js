const redux = require('redux');
const reducers = require('../reducers');
import { applyMiddleware } from 'redux';
import createLogger from 'redux-logger';

module.exports = function(initialState) {
  const middlewares = [];

  if (process.env.REACT_WEBPACK_ENV !== 'dist') {
    //store.dispatch = addLoggingToDispatch(store);
    middlewares.push(createLogger());
  }

  const store = redux.createStore(reducers, initialState, applyMiddleware(...middlewares));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

/*const addLoggingToDispatch = (store) => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch
  }

  return (action) => {
    console.group(action.type);

    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);

    const returnValue = rawDispatch(action);

    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);

    return returnValue;
  }
}*/
