import { connect } from 'react-redux';
import { createPost } from '../actions/post_actions';
import NewPostForm from '../components/new_post_form';

const mapDispatchToProps = (dispatch) => {
  return ({
      createPost: (post) => dispatch(createPost(post))
  });
};

export default connect(null, mapDispatchToProps)(NewPostForm);
