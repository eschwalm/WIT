import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, TextInput, Button, Picker } from 'react-native';
import { createPost } from '../actions/post_actions';

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Post Title',
      img: 'an image url',
      category: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    console.log("Testing the submit button: ", this.state);
  }

  render() {
    console.log(this.state);
    return (
      <View>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          value={this.state.title}
          onChangeText={(title) => this.setState({title})}
          />

        <Picker onValueChange={(category) => this.setState({category})}>
          <Picker.Item label="Nature" value="nature" />
          <Picker.Item label="Objects" value="objects" />
          <Picker.Item label="People" value="people" />
          <Picker.Item label="Fashion" value="fashion" />
          <Picker.Item label="Design" value="design" />
          <Picker.Item label="I don't know!" value="idk" />
        </Picker>
        <Text>{this.state.category}</Text>

        <Button
          title="Submit"
          onPress={this.handleSubmit}
          />
      </View>
    );
  }
}

export default CreatePost;
