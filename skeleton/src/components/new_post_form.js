import React, { Component } from 'react';
import {
  AppRegistry, TextInput, Picker, Text,
  View, Button, Image, ImagePickerIOS, Modal } from 'react-native';
import Card from './card';
import CardSection from './card_section';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'New Post Title',
      img: null,
      category: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  // componentDidMount() {
  //   // this.pickImage();
  // }

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ img: imageUri });
    }, error => console.error(error));
  }

  handleSubmit() {
    console.log("Testing the submit button: ", this.state);
    this.props.createPost(this.state)
      .then(res => console.log(res))
  }

  render() {
    return (
        <View>
          {this.state.img?
          <Image style={{ height:200 }} source={{ uri: this.state.img }} /> :
          null
          }

          <Button title="Select Image" onPress={this.pickImage} />

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
          <Text>Category: {this.state.category}</Text>

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
AppRegistry.registerComponent('NewPostForm', () => NewPostForm);
