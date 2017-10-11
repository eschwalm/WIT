import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/album_list';

//expand component to fill entire content area of device
const App = () => (
  <View style={{ flex: 1}}>
    <Header headerText={'Albums'}/>
    <AlbumList />
  </View>
);

AppRegistry.registerComponent('albums', () => App);
