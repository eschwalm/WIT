import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      upvotes: 0,
      post_id: this.props.postId,
    };
  }

  handleSubmit() {
    this.props.createAnswer(this.state);
    this.setState({
      body: '',
      upvotes: 0,
      post_id: ''
    });
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
      <Card>
        <CardSection style={styles.containerStyle}>
          <TextInput
            onChangeText={(body) => this.setState({body})}
            value={this.state.body}
            placeholder='Identify me!'
            style={styles.inputStyle} />
        </CardSection>
        <CardSection>
          <Button onPress={this.handleSubmit.bind(this)}>Answer</Button>
        </CardSection>
      </Card>
    );
  }
}

export default AnswerForm;
