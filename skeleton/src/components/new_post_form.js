import React, { Component } from 'react';
import { TextInput } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';


class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = { description: "Add details to help us help you!"};
  }

  render() {
    return (
      <Card>
        <CardSection>
          <TextInput
            style={{height: 100}}
            onChangeText={(text) => this.setState({description: text})}
            value={this.state.description}>
          </TextInput>
        </CardSection>
        <CardSection>
          <Button>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default NewPostForm;
