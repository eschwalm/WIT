import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class CategoriesIndex extends Component {

  selectCategory() {
    Actions.categoryFeed();
  }

  render() {
    const categories = ["Nature", "People", "Design", "Fashion", "Random"];
    const categoryItemStyle = {
      fontSize: 26,
      borderRadius: 10,
      borderWidth: 3,
      borderColor: '#2ecc71',
      alignSelf: 'center',
      height: 50,
      width: 200,
      padding: 10,
      margin: 10
    }

    return (
      <View>
        {categories.map(category => (
          <TouchableOpacity onPress={this.selectCategory.bind(this)}>
            <Text style={categoryItemStyle}>{category}</Text>
          </TouchableOpacity>
        ))
        }
      </View>
    );
  }
}

export default CategoriesIndex;
