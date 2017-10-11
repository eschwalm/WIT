import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import PostsIndex from './src/components/posts_index';

//expand component to fill entire content area of device
const App = () => (
  <View style={{ flex: 1}}>
    <Header headerText={'Albums'}/>
    <PostsIndex />
  </View>
);

AppRegistry.registerComponent('skeleton', () => App);
