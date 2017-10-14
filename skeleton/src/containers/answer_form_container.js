import { connect } from 'react-redux';
import { createAnswer } from '../actions/answer_actions';
import AnswerForm from '../components/answer_form';

const mapStateToProps = (state, ownProps) => ({
  postId: ownProps.postId
});

const mapDispatchToProps = dispatch => ({
  createAnswer: (answer) => dispatch(createAnswer(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(AnswerForm);
