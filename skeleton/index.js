import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import PostsIndexContainer from './src/containers/posts_index_container';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';
import Routing from './src/router';

//expand component to fill entire content area of device

const App = () => (
  // Possibly factor the Provider and store out into Root.js
  // that would wrap Provider and pass store to <App />
  <Provider store={configureStore()} >

  <View style={{ flex: 1}}>
    <Routing />
  </View>

</Provider>
);

AppRegistry.registerComponent('skeleton', () => App);
