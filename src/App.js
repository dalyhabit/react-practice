import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import configureStore from './store/configureStore';

import Layout from './components/Layout';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path='/' component={Layout} />
      </Router>
    </Provider>
  );
}
