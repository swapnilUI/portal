import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './Routes';
import registerServiceWorker from './registerServiceWorker';

//Redux store
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import allReducers from './reducers/index';

//Import actions
import {getDiscussions} from './actions/discussions';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);
store.dispatch(getDiscussions());
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
