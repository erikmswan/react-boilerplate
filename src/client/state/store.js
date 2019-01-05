import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import { routesMap } from 'routes';
// import options from './options';
import * as actionCreators from 'state/actions';
import * as reducers from 'state/reducers';

export const configureStore = (preLoadedState, initialEntries, options = {}) => {
  const { reducer, middleware, enhancer, thunk } = connectRoutes(routesMap, {
    ...options,
    initialEntries // change the basename by passing an object like { basename: '/somewhere' }
  });

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = composeWithDevTools({ actionCreators })(enhancer, middlewares);
  const store = createStore(rootReducer, preLoadedState, enhancers);

  return { store, thunk };
};
