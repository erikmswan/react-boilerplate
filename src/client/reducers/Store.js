import { combineReducers,
         createStore } from 'redux';
import page            from './Page/Page';

const reducers = combineReducers({
    page
});

const store = createStore(reducers);

export default store;
