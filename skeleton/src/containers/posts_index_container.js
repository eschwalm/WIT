import { connect } from 'react-redux';
import { fetchAllPosts } from '../actions/post_actions';
import PostsIndex from '../components/posts_index';

const mapStateToProps = (state) => {
  return ({
    posts: Object.values(state.posts)
  });
};

const mapDispatchToProps = (dispatch) => ({
  fetchAllPosts: () => dispatch(fetchAllPosts())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostsIndex);
