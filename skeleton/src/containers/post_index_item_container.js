import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../../actions/post_actions';
import PostIndexItem from '../components/post_index_item';

const mapStateToProps = (state, { match }) => ({
  post: state.posts[match.params.postId]
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePost: (id) => dispatch(fetchSinglePost(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);
