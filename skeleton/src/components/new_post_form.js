import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry, TextInput, Picker, Text,
  View, Button, Image, ImagePickerIOS } from 'react-native';

import Card from './card';
import CardSection from './card_section';
import { createPost } from '../actions/post_actions';
import { uploadImage } from '../api/image_api';

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Post Title',
      img: 'an image url',
      category: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      console.log(imageUri);
      this.setState({ img: imageUri });
    }, error => this.props.navigation.goBack(null));
  }

  handleSubmit(e) {
    e.preventDefault();
    uploadImage(this.state.img);
    // .then(res => this.props.createPost({
    //   title: this.state.title,
    //   img: res.secure_url,
    //   category: this.state.category
    // }));
  }

  render() {
    return (
        <View>
          {this.state.img?
          <Image
            style={{ height:300 }}
            source={{ uri: this.state.img }} /> :
          null
          }
          <TextInput
            value={this.state.title}
            onChangeText={(title) => this.setState({title})} />

          <Picker onValueChange={(category) => this.setState({category})}>
            <Picker.Item label="Nature" value="Nature" />
            <Picker.Item label="Objects" value="Objects" />
            <Picker.Item label="People" value="People" />
            <Picker.Item label="Fashion" value="Fashion" />
            <Picker.Item label="Design" value="Design" />
            <Picker.Item label="Random" value="Random" />
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

AppRegistry.registerComponent('NewPostForm', () => NewPostForm);
