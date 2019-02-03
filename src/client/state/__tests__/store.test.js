import { configureStore } from '../store';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { connectRoutes } from 'redux-first-router';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

const testRoute = 'testRoute';
const preLoadedState = 'preLoadedState';
const initialEntries = 'initialEntries';
const options = { options: 'options' };
const reducer = 'reducer';
const middleware = 'middleware';
const middlewares = 'middlewares';
const enhancer = 'enhancer';
const enhancers = 'enhancers';
const thunk = 'thunk';
const rootReducer = 'rootReducer';
const store = 'store';

jest.mock('redux');
jest.mock('redux-first-router');
jest.mock('redux-devtools-extension/developmentOnly');
jest.mock('routes', () => ({ routesMap: 'testRoute' }));
jest.mock('state/reducers', () => ({}));
jest.mock('state/actions', () => ({}));

connectRoutes.mockImplementation(() => ({ reducer, middleware, enhancer, thunk }));
combineReducers.mockImplementation(() => rootReducer);
applyMiddleware.mockImplementation(() => middlewares);
composeWithDevTools.mockImplementation(() => () => 'enhancers');
createStore.mockImplementation(() => store);

describe('configureStore', () => {
  it('should properly configure the store', () => {
    const result = configureStore(preLoadedState, initialEntries, options);

    expect(connectRoutes).toHaveBeenCalledTimes(1);
    expect(connectRoutes).toHaveBeenCalledWith(testRoute, { ...options, initialEntries });

    expect(combineReducers).toHaveBeenCalledTimes(1);
    expect(combineReducers).toHaveBeenCalledWith({ default: {} , location: reducer });

    expect(applyMiddleware).toHaveBeenCalledTimes(1);
    expect(applyMiddleware).toHaveBeenCalledWith(middleware);

    expect(composeWithDevTools).toHaveBeenCalledTimes(1);
    expect(composeWithDevTools).toHaveBeenCalledWith({ actionCreators: { default: {} } });

    expect(createStore).toHaveBeenCalledTimes(1);
    expect(createStore).toHaveBeenCalledWith(rootReducer, preLoadedState, enhancers);
    
    expect(result).toMatchSnapshot('configureStore');
  });

  it('should fallback to the default options param', () => {
    const result = configureStore(preLoadedState, initialEntries);

    expect(result).toMatchSnapshot('configureStore::noOptions');
  });
});