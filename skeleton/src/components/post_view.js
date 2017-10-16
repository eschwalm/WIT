import React, { Component } from 'react';
import { Text, View, ListView, Image } from 'react-native';
import { connect } from 'react-redux';
import { fetchAnswers } from '../actions/answer_actions';
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
    this.props.fetchAnswers(this.props.post._id);
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({answers}) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(answers);
  }

  renderRows() {
    if (this.props.answers.length > 0) {
      return this.props.answers.map(answer => {
        return (
          <Text>
            {answer.body}
          </Text>
        );
      });
    }
  }

  render() {
    console.log(this.props);
    console.log(this.props.answers);
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
        <Text>
          { this.renderRows() }
        </Text>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  answers: state.answers
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: id => dispatch(fetchAnswers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
