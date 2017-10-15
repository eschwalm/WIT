import React, { Component } from 'react';
import {
  AppRegistry, TextInput, Picker, Text,
  ScrollView, Button, Image, ImagePickerIOS } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import { createPost } from '../actions/post_actions';
import { uploadImage } from '../api/image_api';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      category: 'Nature'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  // componentDidMount() {
  //   // this.pickImage();
  // }

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      console.log(imageUri);
      this.setState({ img: imageUri });
    }, error => this.props.navigation.goBack(null));
  }


  // handleSubmit() {
  //   console.log("Testing the submit button: ", this.state);
  //   this.props.createPost(this.state)
  //     .then(res => console.log(res))
  //   }

  handleSubmit(e) {
    e.preventDefault();
    uploadImage(this.state.img)
    .then(response =>
      this.props.createPost({
      title: this.state.title,
      img: response,
      category: this.state.category
    }));
  }

  render() {
    const styles = {
      inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3
      },
      containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }
    };

    return (
        <ScrollView>
          {this.state.img?
          <Image
            style={{ height:180 }}
            source={{ uri: this.state.img }} /> :
          null
          }

          <Button title="Select Image" onPress={this.pickImage} />

          <Card>
            <CardSection style={styles.containerStyle}>
              <TextInput
                placeholder='Add a description!'
                value={this.state.title}
                onChangeText={(title) => this.setState({title})}
                style={styles.inputStyle} />
            </CardSection>

            <Picker
              selectedValue={this.state.category}
              onValueChange={(category) => this.setState({category})}>
              <Picker.Item label="Nature" value="Nature" />
              <Picker.Item label="People" value="People" />
              <Picker.Item label="Fashion" value="Fashion" />
              <Picker.Item label="Design" value="Design" />
              <Picker.Item label="Random" value="Random" />
            </Picker>

            <Button
              title="Submit"
              onPress={this.handleSubmit}>
              Create
            </Button>
          </Card>
        </ScrollView>
    );
  }
}

export default NewPostForm;
AppRegistry.registerComponent('NewPostForm', () => NewPostForm);
