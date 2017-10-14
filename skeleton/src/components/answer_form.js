import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';
import AnswerModal from './answer_modal';

class AnswerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  toggleModal() {
    this.setState({modalIsOpen: !this.state.modalIsOpen});
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Button onPress={() => this.setState({modalIsOpen: !this.state.modalIsOpen})}>Answer</Button>
        </CardSection>
        <AnswerModal
          visible={this.state.modalIsOpen}
          postId={this.props.postId}
          createAnswer={this.props.createAnswer}
          toggleModal={this.toggleModal.bind(this)}>
        </AnswerModal>
      </Card>
    );
  }
}

export default AnswerForm;
