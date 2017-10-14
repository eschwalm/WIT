import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry, TextInput, Picker, Text,
  View, Button, Image, ImagePickerIOS } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import { createPost } from '../actions/post_actions';

export default class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      img: '',
      category: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.pickImage();
  }

  pickImage() {
    ImagePickerIOS.openSelectDialog({}, imageUri => {
      this.setState({ img: imageUri });
    }, error => console.error(error));
  }

  handleSubmit() {
    console.log("Testing the submit button: ", this.state);
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
        <View>
          {this.state.img?
          <Image style={{ height:300 }} source={{ uri: this.state.img }} /> :
          null
          }
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
              <Picker.Item label="Objects" value="Objects" />
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
        </View>
    );
  }
}

AppRegistry.registerComponent('NewPostForm', () => NewPostForm);
