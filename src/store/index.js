import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import topics from './reducer/topic';
import details from './reducer/details';
import user from './reducer/user';

const reducer = combineReducers({
    topics,
    details,
    user
});

const store = createStore(reducer,applyMiddleware(thunk));

export default store;