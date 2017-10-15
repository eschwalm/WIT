import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
import AnswersReducer from './answers_reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  answers: AnswersReducer
});

export default rootReducer;
