import merge from 'lodash/merge';

import {
  RECEIVE_POST_ANSWERS,
  RECEIVE_ANSWER,
  RECEIVE_UPDATED_ANSWER
} from '../actions/post_actions';

const PostsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_POST_ANSWERS:
      return merge({}, action.answers);
    case RECEIVE_ANSWER:
      return merge({}, state.answers, action.answer);
    case RECEIVE_UPDATED_ANSWER:
      newState = merge({}, newState, state.answers);
      Object.keys(newState).map( idx => {
        if (newState[idx].id === action.answer.id) {
          newState[idx] = action.answer;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default PostsReducer;
