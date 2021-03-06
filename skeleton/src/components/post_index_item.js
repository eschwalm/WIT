import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './card';
import CardSection from './card_section';
import Button from './button';
import AnswerFormContainer from '../containers/answer_form_container';


class PostIndexItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: [],
    };
  }

  postSelect() {
    Actions.postView({
      post: this.props.post
    });
  }

  render() {
    const styles = {
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
      },
      headerTextStyle: {
        fontSize: 18
      },
      imageStyle: {
        height: 300,
        flex: 1,
        width: null
      }
    };

    const {
      headerContentStyle,
      headerTextStyle,
      imageStyle
    } = styles;

    return (
      <Card>
        <CardSection>
          <View style={headerContentStyle}>
            <Text>{this.props.post.category}</Text>
            <Text style={headerTextStyle}>{this.props.post.title}</Text>
          </View>
        </CardSection>
        <TouchableOpacity onPress={this.postSelect.bind(this)}>
          <CardSection>
            <Image
              style={imageStyle}
              source={ { uri: this.props.post.img } } />
          </CardSection>
        </TouchableOpacity>
        <AnswerFormContainer postId={this.props.post._id} />
      </Card>
    );
  }
}

export default PostIndexItem;
