import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Picker, Text, View } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';
import { createPost } from '../actions/post_actions';


class NewPostForm extends Component {
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
    return (
        <View>
          <TextInput
            style={{height: 100}}
            value={this.state.title}
            onChangeText={(title) => this.setState({title})} />

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
            onPress={this.handleSubmit}>
            Create
          </Button>
        </View>
    );
  }
}

export default NewPostForm;
