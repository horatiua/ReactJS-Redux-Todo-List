import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import configureStore from './stores';
import App from './containers/App';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/(list/:listId)" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
