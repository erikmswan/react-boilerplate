
import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import log from 'loglevel';
import { constants } from 'app';
import { configureStore } from 'state';
import { App } from './components';

// set our loglevel
console.log('INDEX!', process.env.NODE_ENV);
log.setLevel(process.env.NODE_ENV === 'production' ? 'error' : 'debug');

// set up our store
export const { store } = configureStore(window[constants.storage] || {});

const render = Component => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app')
  );
};

render(App);
