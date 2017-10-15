import React from 'react';
import { connect } from 'react-redux';
import { fetchSinglePost } from '../actions/post_actions';
import { fetchAnswers } from '../actions/answer_actions';

import PostIndexItem from '../components/post_index_item';

const mapStateToProps = (state, ownProps) => ({
  post: ownProps.post,
  answers: state.answers[ownProps.post._id]
});

const mapDispatchToProps = (dispatch) => ({
  fetchSinglePost: (id) => dispatch(fetchSinglePost(id)),
  fetchAnswers: (id) => dispatch(fetchAnswers(id))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(PostIndexItem);
