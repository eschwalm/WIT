import merge from 'lodash/merge';

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_SINGLE_POST,
  RECEIVE_CATEGORY,
  REMOVE_POST
} from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_SINGLE_POST:
      return merge({}, state, {[action.post._id]: action.post});
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post._id];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
