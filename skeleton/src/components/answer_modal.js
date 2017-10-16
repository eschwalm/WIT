import React, { Component } from 'react';
import { Text, TextInput, View, Modal } from 'react-native';
import Button from './button';
import CardSection from './card_section';

class AnswerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      post_id: this.props.postId,
      upvotes: 0
    };
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      body: '',
      post_id: '',
      upvotes: 0
    });

    this.props.toggleModal();
  }

  render() {
    const styles = {
      cardSectionStyle: {
        justifyContent: 'center',
        height: 70
      },
      inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 20,
        flex: 3
      },
      containerStyle: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center',
      }
    };
    const { containerStyle, inputStyle, cardSectionStyle } = styles;

    return (
      <Modal
        visible={this.props.visible}
        transparent
        animationType="slide"
        onRequestClose={() => {}}>
          <View style={containerStyle}>
            <CardSection style={cardSectionStyle}>
              <TextInput
                value={this.state.body}
                onChangeText={(body) => this.setState({body})}
                placeholder='Write your answer'
                style={inputStyle}
                autoCorrect={false} />
            </CardSection>
            <CardSection style={cardSectionStyle}>
              <Button onPress={this.handleClick.bind(this)}>
                Answer
              </Button>
            </CardSection>
          </View>
      </Modal>
    );
  }
}

export default AnswerModal;
