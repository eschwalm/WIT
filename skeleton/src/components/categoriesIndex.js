import React, { Component } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoriesIndex extends Component {
  _renderItem({item}) {
    return (
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => Actions.categoryFeed({category: item.title})}>
        <Text
          style={styles.textStyle}>
          {item.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const categories = [
      {key: 0, title: "Nature"},
      {key: 1, title: "People"},
      {key: 2, title: "Design"},
      {key: 3, title: "Fashion"},
      {key: 4, title: "Random"}];

    return (
      <FlatList
        data={categories}
        renderItem={this._renderItem}
        />
    );
  }
}

const styles = {
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
};

export default CategoriesIndex;
