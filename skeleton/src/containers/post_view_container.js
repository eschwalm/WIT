import { connect } from 'react-redux';
import { fetchAnswers } from '../actions/answer_actions';
import PostView from '../components/post_view';

const mapStateToProps = (state, ownProps) => ({
  answers: state.answers,
  post: ownProps.post
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: id => dispatch(fetchAnswers(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
