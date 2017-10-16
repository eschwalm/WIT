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
          <Text
            key={answers[key]._id}
            >
            {answers[key].body}
          </Text>
        );
      });
    }
  }

  render() {
    // console.log(this.props);
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

const mapStateToProps = (state, ownProps) => ({
  answers: state.answers
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: id => dispatch(fetchAnswers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
