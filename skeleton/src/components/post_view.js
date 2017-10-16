import React, { Component } from 'react';
import { Text, View, ScrollView, ListView, Image } from 'react-native';
import Card from './card';
import CardSection from './card_section';
import Button from './button';
import AnswerFormContainer from '../containers/answer_form_container';

class PostView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchAnswers(this.props.post._id)
    .then(answers => this.setState({answers}));
    this.createDataSource(this.props);
    console.log('props', this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(this.props.answers).length !==
        Object.keys(nextProps.answers).length) {
      this.createDataSource(nextProps);
    }
  }

  createDataSource({answers}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(answers);
  }

  renderRows() {
    const {answers} = this.props;
    if (Object.keys(answers).length > 0) {
      return Object.keys(answers).map(key => {
        return (
          <CardSection>
            <Text
              key={answers[key]._id}
              >
              {answers[key].body}
            </Text>
          </CardSection>
        );
      });
    }
    return (
      <CardSection>
        <Text>
          Be the first to answer this post!
        </Text>
      </CardSection>
    )
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
      <ScrollView>
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
            { this.renderRows() }
        </Card>
      </ScrollView>
    );
  }
}

export default PostView;
