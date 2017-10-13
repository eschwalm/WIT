import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer'; //Make sure we have this.

import {persistStore, autoRehydrate} from 'redux-persist';
import {AsyncStorage} from 'react-native';
// The above is used at the bottom of configureStore like so:
// persistStore(store, {storage: AsyncStorage});
// https://github.com/JaredTan/Woven/blob/master/front-end/store/index.js

const configureStore = (initialState = {}) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      autoRehydrate()
    ));
    persistStore(store, {storage: AsyncStorage});
    return store;
};

export default configureStore;
