import merge from 'lodash/merge';

import {
  RECEIVE_POST_ANSWERS,
  RECEIVE_ANSWER,
  RECEIVE_UPDATED_ANSWER
} from '../actions/answer_actions';

const AnswersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_POST_ANSWERS:
      action.answers.forEach( answer => {
        if (newState[answer.post_id]) {
          newState[answer.post_id] += answer;
        } else {
          newState[answer.post_id] = [answer];
        }
      });
      return merge({}, state, newState);
    case RECEIVE_ANSWER:
      return merge({}, state.answers, action.answer);
    case RECEIVE_UPDATED_ANSWER:
      newState = merge({}, newState, state.answers);
      Object.keys(newState).map( idx => {
        if (newState[idx]._id === action.answer._id) {
          newState[idx] = action.answer;
        }
      });
      return newState;
    default:
      return state;
  }
};

export default AnswersReducer;
