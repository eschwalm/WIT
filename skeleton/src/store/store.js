import thunk from 'redux-thunk';
import {createStore, compose, applyMiddleware} from 'redux';
// import rootReducer from '../reducers/root_reducer'; //Make sure we have this.

// import {persistStore, autoRehydrate} from 'redux-persist'; What does this do?
// import {AsyncStorage} from 'react-native';
// The above is used at the bottom of configureStore like so:
// persistStore(store, {storage: AsyncStorage});
// https://github.com/JaredTan/Woven/blob/master/front-end/store/index.js

const configureStore = (initialState = {}) => (
  createStore(
    RootReducer,
    initialState,
    applyMiddleware(thunk)
  )
);

export default configureStore;
