import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

class PostView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text>Hello!</Text>
        </CardSection>
      </Card>
    );
  }


}

export default PostView;
