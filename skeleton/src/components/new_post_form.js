import React, { Component } from 'react';
import {
  AppRegistry, TextInput, Picker, Text,
  ScrollView, View, Image, ImagePickerIOS, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './card';
import Button from './button';
import CardSection from './card_section';
import { createPost } from '../actions/post_actions';
import { uploadImage } from '../api/image_api';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      category: 'Random',
      isLoading: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.pickImage = this.pickImage.bind(this);
  }

  toggleLoader = () => {
    if (this.state.isLoading === true) {
      this.setState({isLoading: false})
    } else {
      this.setState({isLoading: true})
    }
  };

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      console.log(imageUri);
      this.setState({ img: imageUri });
    }, error => this.props.navigation.goBack(null));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.toggleLoader();
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
        height: 30,
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 3,
        margin: 5
      },
      containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      },
      pickerLabelStyle: {
        fontSize: 18,
        alignSelf: 'center',

      }
    };

    console.log("Loading :", this.state);

    return (
      <Card>
        <ScrollView>

          <Button onPress={this.pickImage}>
            Select Image
          </Button>

          {this.state.img?
          <Image
            style={{ height:180, padding: 5 }}
            source={{ uri: this.state.img }} /> :
          null
          }

          <CardSection style={styles.containerStyle}>
            <TextInput
              placeholder='Ask a question!'
              value={this.state.title}
              onChangeText={(title) => this.setState({title})}
              style={styles.inputStyle} />
          </CardSection>

          <CardSection style={{ flexDirection: 'column' }}>
            <Text style={styles.pickerLabelStyle}>Category</Text>
            <Picker
              style={{ flex: 1 }}
              selectedValue={this.state.category}
              onValueChange={(category) => this.setState({category})}>
              <Picker.Item label="Nature" value="Nature" />
              <Picker.Item label="People" value="People" />
              <Picker.Item label="Fashion" value="Fashion" />
              <Picker.Item label="Design" value="Design" />
              <Picker.Item label="Random" value="Random" />
            </Picker>
          </CardSection>

          { this.state.isLoading ?
            <ActivityIndicator size="large" style={[{padding: 20}, {transform: [{scale: 1.5}]}]} /> : null }
          { (!this.state.isLoading) ? <Button onPress={this.handleSubmit}>Submit</Button> : null }

        </ScrollView>
      </Card>
    );
  }
}

export default NewPostForm;
AppRegistry.registerComponent('NewPostForm', () => NewPostForm);
