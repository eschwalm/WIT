import React from 'react';
import {
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const window = Dimensions.get('window');

import CategoriesIndex from './categoriesIndex';

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.containerStyle}>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => Actions.postIndex()}>

        <Text
          style={styles.textStyle}>
          Home</Text>

      </TouchableOpacity>

      <CategoriesIndex />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 2
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginTop: -1,
    padding: 10
  }
});
