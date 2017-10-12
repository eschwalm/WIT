import merge from 'lodash/merge';

import {
  RECEIVE_ALL_POSTS,
  RECEIVE_SINGLE_POST,
  REMOVE_POST
} from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_POSTS:
      return merge({}, action.posts);
    case RECEIVE_SINGLE_POST:
      return {[action.post.id]: action.post};
    case REMOVE_POST:
      let newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
