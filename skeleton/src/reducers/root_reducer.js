import { combineReducers } from 'redux';
import postsReducer from './posts_reducer';
import answersReducer from './answers_reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  answers: answersReducer
});

export default rootReducer;
