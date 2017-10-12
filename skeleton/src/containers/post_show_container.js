import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePosts } from '../../actions/post_actions';
import PostShow from '../../components/posts_index';

const mapStateToProps = (state, { match }) => ({
  post: state.posts[match.params.postId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePost: (id) => dispatch(fetchSinglePost(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
