import { connect } from 'react-redux';
import { fetchAnswers } from '../actions/answer_actions';
import { fetchSinglePost } from '../actions/post_actions';
import PostView from '../components/post_view';

const mapStateToProps = (state, ownProps) => ({
  answers: state.answers,
  post: ownProps.post
});

const mapDispatchToProps = dispatch => ({
  fetchAnswers: id => dispatch(fetchAnswers(id)),
  fetchSinglePost: id => dispatch(fetchSinglePost(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
