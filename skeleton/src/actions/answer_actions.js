import * as APIUtil from '../api/answer_api';
export const RECEIVE_POST_ANSWERS = 'RECEIVE_POST_ANSWERS';
export const RECEIVE_ANSWER = 'RECEIVE_ANSWER';
export const RECEIVE_UPDATED_ANSWER = 'RECEIVE_UPDATED_ANSWER';



export const fetchAnswers = (id) => (dispatch) => (
    APIUtil.fetchAnswers(id)
      .then(answers => dispatch(receiveAnswers(answers)))
);

export const updateAnswer = (path) => (dispatch) => (
  APIUtil.updateAnswer(path)
    .then(answer => dispatch(receiveUpdatedAnswer(answer)))
);

export const createAnswer = answer => dispatch => (
  APIUtil.createAnswer(answer)
    .then(newAnswer => dispatch(receiveAnswer(newAnswer)))

);

export const receiveAnswers = answers => ({
  type: RECEIVE_POST_ANSWERS,
  answers
});

export const receiveAnswer = (answer) => ({
  type: RECEIVE_ANSWER,
  answer
});

export const receiveUpdatedAnswer = answer => ({
  type: RECEIVE_UPDATED_ANSWER,
  answer
});
