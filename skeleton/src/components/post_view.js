import React, { Component } from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';
import AnswerFormContainer from '../containers/answer_form_container';

class PostView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: []
    };
  }

  componentWillMount() {
    this.props.fetchAnswers(this.props.post._id)
      .then(answers => this.setState({answers}));
    console.log(this.props.answers);
  }

  renderAnswers() {
    const styles = {
      headerTextStyle: {
        fontSize: 18
      }
    };

    if (this.answers && this.answers.length > 0) {
      const answers = this.answers.map(answer =>
        <CardSection>
          <Text style={styles.headerTextStyle}>
            {answer.body}
          </Text>
        </CardSection>
      );
      return answers;
    }
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
        <CardSection>
          <Image
            style={imageStyle}
            source={ { uri: this.props.post.img } } />
        </CardSection>
        <AnswerFormContainer postId={this.props.post._id} />
          {this.renderAnswers()}

      </Card>
    );
  }
}

export default PostView;
