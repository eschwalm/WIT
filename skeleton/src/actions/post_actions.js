import * as APIUtil from '../api/post_api';
export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_SINGLE_POST = 'RECEIVE_SINGLE_POST';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const REMOVE_POST = 'REMOVE_POST';


// async actions
export const fetchAllPosts = () => (dispatch) => {
  return (
    APIUtil.fetchAllPosts()
      .then(posts => dispatch(receiveAllPosts(posts)))
  );
};

export const fetchCategoryPosts = (category) => (dispatch) => {
  return (
    APIUtil.fetchCategoryPosts(category)
      .then(posts => dispatch(receiveAllPosts(posts)))
  );
};

export const fetchSinglePost = (id) => (dispatch) => (
  APIUtil.fetchSinglePost(id)
    .then(post => dispatch(receiveSinglePost(post)))
);

export const createPost = (post) => (dispatch) => (
  APIUtil.createPost(post)
  .then(newPost => dispatch(receiveSinglePost(newPost)))
);

export const deletePost = (id) => (dispatch) => (
  APIUtil.deletePost(id)
    .then(post => dispatch(removePost(post)))
);

// regular actions
export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts
});

export const receiveSinglePost = (post) => ({
  type: RECEIVE_SINGLE_POST,
  post
});

export const removePost = (id) => ({
  type: REMOVE_POST,
  id
});
